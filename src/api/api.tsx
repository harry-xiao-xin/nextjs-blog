import { get, post, put } from "@/utils/http";
import { WebSitConfig } from "@/definition/websiteConfig";
export default {
  getTopAndFeaturedArticles: () => {
    return get("/api/articles/topAndFeatured");
  },
  getArticles: (params: any) => {
    return get("/api/articles/all", { params: params });
  },
  getArticlesByCategoryId: (params: any) => {
    return get("/api/articles/categoryId", { params: params });
  },
  getArticleById: (articleId: any) => {
    return get("/api/articles/" + articleId);
  },
  getAllCategories: () => {
    return get("/api/categories/all");
  },
  getAllTags: () => {
    return get("/api/tags/all");
  },
  getTopTenTags: () => {
    return get("/api/tags/topTen");
  },
  getArticlesByTagId: (params: any) => {
    return get("/api/articles/tagId", { params: params });
  },
  getAllArchives: (params: any) => {
    return get("/api/archives/all", { params: params });
  },
  login: (params: any) => {
    return post("/api/users/login", params);
  },
  saveComment: (params: any) => {
    return post("/api/comments/save", params);
  },
  getComments: (params: any) => {
    return get("/api/comments", { params: params });
  },
  getTopSixComments: () => {
    return get("/api/comments/topSix");
  },
  getAbout: () => {
    return get("/api/about");
  },
  getFriendLink: () => {
    return get("/api/links");
  },
  submitUserInfo: (params: any) => {
    return put("/api/users/info", params);
  },
  getUserInfoById: (id: any) => {
    return get("/api/users/info/" + id);
  },
  updateUserSubscribe: (params: any) => {
    return put("/api/users/subscribe", params);
  },
  sendValidationCode: (username: string) => {
    return get("/api/users/code", {
      params: {
        username: username,
      },
    });
  },
  bindingEmail: (params: any) => {
    return put("/api/users/email", params);
  },
  register: (params: any) => {
    return post("/api/users/register", params);
  },
  searchArticles: (params: any) => {
    return get("/api/articles/search", {
      params: params,
    });
  },
  getAlbums: () => {
    return get("/api/photos/albums");
  },
  getPhotosBuAlbumId: (albumId: any, params: any) => {
    return get("/api/albums/" + albumId + "/photos", {
      params: params,
    });
  },
  getWebsiteConfig: async (): Promise<WebSitConfig> => {
    return get("/api");
  },
  qqLogin: (params: any) => {
    return post("/api/users/oauth/qq", params);
  },
  report: () => {
    post("/api/report");
  },
  getTalks: (params: any) => {
    return get("/api/talks", {
      params: params,
    });
  },
  getTalkById: (id: any) => {
    return get("/api/talks/" + id);
  },
  logout: () => {
    return post("/api/users/logout");
  },
  getRepliesByCommentId: (commentId: any) => {
    return get(`/api/comments/${commentId}/replies`);
  },
  updatePassword: (params: any) => {
    return put("/api/users/password", params);
  },
  accessArticle: (params: any) => {
    return post("/api/articles/access", params);
  },
};
