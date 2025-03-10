import {Hono} from "hono";
import {indexGet} from "./subroutes/get/index-get.ts";
import {indexPost} from "./subroutes/post/index-post.ts";

export const indexApp = new Hono()
  .route('/', indexGet)
  .route('/', indexPost)
