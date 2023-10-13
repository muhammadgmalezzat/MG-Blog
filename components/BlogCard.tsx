import {FunctionComponent} from "react";
import Link from "next/link";
import {BlogPost} from "../@types/schema";
import dayjs from 'dayjs'
import Image from 'next/image';

type BlogCardProps = {
    post: BlogPost
}
//const localizedFormat = require('dayjs/plugin/localizedFormat');
//dayjs.extend(localizedFormat)

const BlogCard: FunctionComponent<BlogCardProps> = ({ post }) => {

    return (
        <Link href={`/post/${post.slug}`}>
            <a className="transition duration-300 hover:scale-105 mb-20">
                <div key={post.title} className="flex flex-col rounded-xl shadow-lg overflow-hidden shadow-gray-400 transition-all duration-300 hover:scale-[1.05] hover:shadow-2xl dark:shadow-black">
                    <div className="flex-shrink-0">
                        <img className="h-64 w-full object-fit" src={post.cover} alt="" />
                    </div>
                    <div className="flex-1 pt-2 pb-6 px-4 flex flex-col justify-between bg-bodyColorLight">
                        <div className="flex-1">
                            {/* <span className="block mt-2">
                                <h4 className="text-xs font-medium text-gray-600">{dayjs(post.date).format('LL')}</h4>
                            </span> */}
                            <span className="block mt-2">
                                <h3 className="text-xl font-semibold text-gray-100">{post.title}</h3>
                            </span>

                            <span className="block mt-2">
                                <p className="text-sm text-gray-400">{post.description}</p>
                            </span>

                            <span className="block mt-2 space-x-4">
                                {
                                    post.tags.map(tag => (
                                        <span key={tag.id} className='bg-textGreen text-black-900 px-2 py-1 text-xs rounded-lg'>
                                            #{tag.name}
                                        </span>
                                    ))
                                }
                            </span>
                        </div>
                    </div>
                </div>
            </a>
        </Link>
    );
};

export default BlogCard;
