import { db } from "@/lib/prisma";
import { notFound } from "next/navigation";

type Props = {
  params: { id: string };
};
export default async function Thought({ params: { id } }: Props) {
  const thought = await db.thought.findUnique({
    where: {
      id,
    },
    select: {
        thought:true,
        id:true,
        author : {
            select : {username:true}
        },
        createdAt : true,
        comments : {
            select : {
                comment : true,
                author : {
                    select : {username : true}
                }
            }
        }
    },
  });
  if(!thought) return notFound()
  return <div>
    <p>{thought.thought}</p>
    <ul>
        {thought.comments.map(comment=>(
            <li key={comment.author.username}>{comment.comment}</li>
        ))}
    </ul>
  </div>;
}
