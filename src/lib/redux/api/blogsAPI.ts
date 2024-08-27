import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Blog, BlogsType } from '@/types/types'
import { get } from 'http'

export const blogsAPI = createApi({
  reducerPath: "blogsAPI",
  baseQuery: fetchBaseQuery({ baseUrl: 'https://a2sv-backend.onrender.com' }),
  endpoints: (builder) => ({
    getBlogs: builder.query<BlogsType, void>({
      query: () => `/api/blogs`,
    }),
    getBlogsById: builder.query<Blog, string>({
      query: (id) => ({
        url: `/api/blogs/${id}`,
        method: 'GET',
      }),
    })
  }),
})

export const { useGetBlogsQuery, useGetBlogsByIdQuery } = blogsAPI