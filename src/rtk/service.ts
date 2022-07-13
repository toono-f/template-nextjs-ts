import { serverApi } from "@/rtk/base-server-api";

type UserType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export const userPost = serverApi.injectEndpoints({
  endpoints: (builder) => ({
    getUserPost: builder.query<UserType, number>({
      query: (id) => ({
        url: `/posts/${id}`,
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useGetUserPostQuery } = userPost;
