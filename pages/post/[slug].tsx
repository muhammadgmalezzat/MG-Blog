import {GetStaticProps, InferGetStaticPropsType} from "next";
import ReactMarkdown from "react-markdown";
import Head from "next/head";
import NotionService from "../../services/notion-service";
import Image from 'next/image';
import { PrismLight  as SyntaxHighlighter  } from 'react-syntax-highlighter';
import atomDark  from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark';
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript'
import Classes from './classes.module.css';
import { Key, ReactChild, ReactFragment, ReactPortal } from "react";
SyntaxHighlighter.registerLanguage("js", js);

const PostContent = ({ markdown, post }: InferGetStaticPropsType<typeof getStaticProps>) => {

    //console.log(post.cover)
 
    
    return (
        <article className="font-bold font-sans bg-bodyColorLight">
            <Head>
                <title >{post.title}</title>
                <meta name={"description"} title={"description"} content={post.description} />
                <meta name={"og:title"} title={"og:title"} content={post.title} />
                <meta name={"og:description"} title={"og:description"} content={post.description} />
                <meta name={"og:image"} title={"og:image"} content={post.cover} />
            </Head>
            
            <div className="min-h-screen pb-20  items-center justify-center ">
                
                <div className="flex flex-col items-center justify-center pt-10 pb-10">
                    <img className="relative aspect-[3/2] w-[90vw] max-w-[900px] shadow-lg overflow-hidden shadow-gray-400 transition-all duration-300 hover:scale-[1.05] hover:shadow-2xl dark:shadow-black rounded-lg " src={post.cover} alt="" />
                    
                    <h1 className="text-textGreen font-bold font-sans md:text-2xl text-2xl my-2 text-center mt-10 ">{post.description}</h1>
                    <span className="block mt-2 space-x-4">
                                {
                                    post.tags.map((tag: { id: Key | null | undefined; name: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; }) => (
                                        <span key={tag.id} className='bg-textGreen text-black-900 px-2 py-1 text-xs rounded-lg'>
                                            #{tag.name}
                                        </span>
                                    ))
                                }
                            </span>
                </div>
                <main className="max-w-5xl mx-auto relative">
                    <div className="flex items-center justify-center w-full">
                        <article className="prose w-full">
                            <ReactMarkdown className={Classes.content}>{markdown}</ReactMarkdown>
                        </article>
                    </div>
                </main>
            </div>

        </article>
    );
    
}


export const getStaticProps: GetStaticProps = async (context) => {
    const notionService = new NotionService()

    // @ts-ignore
    const p = await notionService.getSingleBlogPost(context.params?.slug)

    if (!p) {
        throw ''
    }

    return {
        props: {
            markdown: p.markdown,
            post: p.post
        },
    }
}

export async function getStaticPaths() {
    const notionService = new NotionService()

    const posts = await notionService.getPublishedBlogPosts()

    // Because we are generating static paths, you will have to redeploy your site whenever
    // you make a change in Notion.
    const paths = posts.map(post => {
        return `/post/${post.slug}`
    })

    return {
        paths,
        fallback: false,
    }
}
 
export default PostContent;








