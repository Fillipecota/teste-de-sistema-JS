'use client'

import foto from '@/assets/istockphoto-1268187885-2048x2048.jpg'
import Header from "@/components/Header"
import "./styles.css"
import Image from "next/image"
import Avatar from '@/components/Avatar'
import { BsPencilSquare } from "react-icons/bs";
import { FormEvent, useEffect, useState } from 'react'
import axios from 'axios'
import Post from '@/components/Post'
import TextareaCustom from '@/components/TextareaCustom'
import ButtonCustom from '@/components/ButtonCustom'
import { strict } from 'assert'

// type Author = {
//     name: string;
//     role: string;
//     avatarUrl: string;
// }

// type comment = {
//     id:string;
//     author: Author;
//     publishedAt: Date;
//     content:string;
//     comments:comment[];
// }

// type Post = {
//     id: number;
//     author: Author;
//     publishedAt: Date;
//     content: string;
// }

export default function Feed() {
    const [posts, setPosts] = useState<any[]>([]);
    const [content, setContent] = useState<string>('');

    useEffect(() => {
        loadPost();
    }, [])


    async function loadPost() {
        const response = await axios.get('http://localhost:3001/posts');
        const postSort = response.data.sort((a: any, b: any) => (
            new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
        ))
        setPosts(postSort)

        // const response = await axios.get('http://localhost:3001/posts', {
        //     params: {
        //         _sort: "publishedAt",
        //         _orden: "desc"
        //     }
        // })

    }

    async function handleCreatePost(event: FormEvent) {
    event.preventDefault()

        const post = {
            id: String(posts.length + 1),
            content: content,
            publishedAt: new Date().toISOString(),
            author: {
                name: "Fellipe Sant Anna Cota",
                role: "Metarlugico",
                avatarUrl: "https://avatars.githubusercontent.com/u/170477610?v=4"
            }
        }
        await axios.post('http://localhost:3001/posts', post);
        await loadPost();
        setContent('');
    }

    return (
        <div>
            <Header />
            <div className="container">
                <aside className="sidebar">
                    <Image src={foto} alt="cover" className="cover" />
                    <div className='profile'>
                        <Avatar src='https://avatars.githubusercontent.com/u/170477610?v=4' hasBorder />
                        <strong>Fellipe Sant Anna Cota</strong>
                        <span>Metarlugico</span>
                        <footer>
                            <button className='button-edit-profile'>
                                <BsPencilSquare />
                                Editar seu perfil
                            </button>
                        </footer>
                    </div>
                </aside>

                <main className="main">
                    <form onSubmit={handleCreatePost} className="form-post">

                        <TextareaCustom message={content}
                            setMessage={setContent}
                            title='O que voce esta pensando?'
                        />

                        <ButtonCustom/>

                    </form>
                    {posts.map(item => (
                        <Post post={item} key={item.id} setPost={setPosts} />
                    ))}
                </main>
            </div>
        </div>
    )
}