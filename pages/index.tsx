import {GetStaticProps, InferGetStaticPropsType} from "next";
import Head from "next/head";
import {BlogPost} from "../@types/schema";
import BlogCard from "../components/BlogCard";
import Header from "../components/Header";
import Search from "../components/Search";
import NotionService from "../services/notion-service";
import { useState } from "react";
import Categories from "../components/Categories";
import { removeDuplicates } from "../utils/toUniqueArray";
import { useSelector } from 'react-redux';
import { State } from "../@types/schema";

export const getStaticProps: GetStaticProps = async (context) => {
    const notionService = new NotionService();
    const posts = await notionService.getPublishedBlogPosts()

    return {
        props: {
            posts
        },
        revalidate:60
    }
}

const Home = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
    //const allPosts = useSelector(state => state.allPosts);
    //const filteredPosts = useSelector(state => state.filteredPosts);
    //console.log(allPosts)
    const title = 'MG Blog';
    const description = 'Welcome to Muhammad Gamal Blog, your go-to destination for all things software engineering and problem-solving! Delve into the intricate world of coding, development, and cutting-edge technologies with our expertly crafted content. Our blog is designed to cater to both seasoned software engineers and coding enthusiasts, offering a wealth of valuable insights, tutorials, and solutions to ignite your passion for programming.'
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchQuery = e.target.value;
    setSearchTerm(newSearchQuery);
    };
    
    const allCategories = posts.map((post: { tags: any; }) => post.tags).flat().sort();
// Usage
const uniqueArray = removeDuplicates(allCategories, 'id');

    const filteredPosts = posts.filter((post: BlogPost) => {
        //search by title
        if (post.title.toLowerCase().includes(searchTerm.toLowerCase())) {
            return post;
        }
        // if (post.tags.find(tag => tag.name.toLowerCase().includes(searchTerm.toLowerCase()))) {
        //     return post;
        // }
    })

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name={"description"} title={"description"} content={description}/>
                <meta name={"og:title"} title={"og:title"} content={title}/>
                <meta name={"og:description"} title={"og:description"} content={title}/>
            </Head>

            <div className="min-h-screen bg-bodyColorLight">
                <Header/>
                <main className="max-w-7xl mx-auto relative">
                    
                    <div className="h-full pt-4 pb-16 mx-auto">
                        
                        <div className="flex items-center justify-center">
                            <h1 className="font-extrabold text-4xl text-black mb-20 mt-10 text-gray-200 ">Notion Blog</h1>
                        </div>
                        <div className="">
                            <Search searchTerm={searchTerm} handleInputChange={handleSearchChange} />
                        </div>
                        {/* <Categories allCategories={uniqueArray} /> */}
                        <div className="mt-12 max-w-lg mx-auto grid gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-3 md:max-w-[90%]">
                            {filteredPosts.map((post: BlogPost) => (
                                <BlogCard key={post.id} post={post}/>
                            ))}
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
};

export default Home;
