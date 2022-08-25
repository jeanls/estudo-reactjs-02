import {format, formatDistanceToNow} from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import styles from './Post.module.css'
import {Comment} from "../comment/Comment.js";
import {Avatar} from "../avatar/Avatar.js";
import {ChangeEvent, FormEvent, useState} from 'react'
import Author from "../../util/Author";

interface PostProps {
    author: Author,
    content: string,
    publishedAt: Date
}

export function Post({author, content, publishedAt}: PostProps) {
    const publishedAtFormatted = format(publishedAt, "d 'de' LLLL 'ás' HH:mm'h'", {locale: ptBR})
    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {locale: ptBR, addSuffix: true})

    const [comments, setComments] = useState(['Olá mundo']);
    const [newCommentText, setNewCommentText] = useState('');

    const isNewCommentEmpty = newCommentText.length === 0;

    function handleCreateNewComment(event: FormEvent) {
        event.preventDefault();
        setComments([...comments, newCommentText]);
        setNewCommentText('');
    }

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
        setNewCommentText(event.target.value)
    }

    function deleteComment(comment: string) {
        const commentsWithoutDeletedOne = comments.filter(value => {
            return value !== comment
        })
        setComments(commentsWithoutDeletedOne);
    }

    function handleNewCommentInvalid(event: any) {
        console.log(event);
    }

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar
                        src={author.avatarUrl}
                        hasBorder
                    />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time
                    title={publishedAtFormatted}
                    dateTime={publishedAt.toLocaleString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>
            <div dangerouslySetInnerHTML={{__html: content}} className={styles.content}>

            </div>
            <form action="#" onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea
                    onInvalid={handleNewCommentInvalid}
                    required
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                    placeholder="Deixe um comentário"
                />
                <footer>
                    <button type="submit" disabled={isNewCommentEmpty}>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map((comment, index) => {
                    return (
                        <Comment
                            key={index}
                            content={comment}
                            onDeleteComment={deleteComment}
                        />
                    );
                })}
            </div>
        </article>
    );
}
