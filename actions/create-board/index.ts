"use server";

import { auth } from "@clerk/nextjs/server";
import { InputType } from "./types";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { createSafeAction } from "@/lib/create-safe-action";
import { CreateBoard } from "./schema";
import { error } from "console";
import { board } from "@prisma/client";
type HandlerReturnType = { error: string } | { data: board };


const handler = async(data: InputType): Promise<HandlerReturnType> => {
    const { userId, orgId } = auth();
    if(!userId || !orgId){
        return{
            error: "Unauthorized",
        };
    }

    const { title, image } = data;

   const [
    imageId,
    imageThumbUrl,
    imageFullUrl,
    imageLinkHtml,
    imageUserName
   ] = image.split("|");
   
   console.log({
    imageId,
    imageThumbUrl,
    imageFullUrl,
    imageLinkHtml,
    imageUserName
});

   if(!imageId || !imageThumbUrl || !imageFullUrl || !imageLinkHtml || !imageUserName){
    return {
        error: "Missing fields. Failed to create new board"
    }
   }

    let board;
    try {
        board = await db.board.create({
         data:{
            title,
            orgId,
            imageId,
            imageThumbUrl,
            imageFullUrl,
            imageUserName,
            imageLinkHtml,
         }
        });
    } catch (error) {
        return{
            error: "Failed to create",
            
        }
    }

    revalidatePath(`/board/${board.id}`);
    return { data: board};
};

export const createBoard = createSafeAction(CreateBoard, handler);