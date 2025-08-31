"use client";

import { use } from "react";

export default function BlogPostDetail({ params }) {
    const { blogId } = use(params); // ✅ unwrap promise

    return <h1>Details about product {blogId}</h1>;
}
