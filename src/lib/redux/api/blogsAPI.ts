import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BlogsType } from '@/types/types'

export const blogsAPI = createApi({
  reducerPath: "blogsAPI",
  baseQuery: fetchBaseQuery({ baseUrl: 'https://a2sv-backend.onrender.com' }),
  endpoints: (builder) => ({
    getBlogs: builder.query<BlogsType, void>({
      query: () => `/api/blogs`,
    }),
  }),
})

export const { useGetBlogsQuery } = blogsAPI