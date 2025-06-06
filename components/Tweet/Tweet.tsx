'use client';
import styles from './Tweet.module.scss';
import {useState} from "react";
import {doc,updateDoc, deleteDoc} from 'firebase/firestore';
import {db} from "@/lib/firebaseConfig";
import Image from "next/image";
import {fixIcon} from '@/utils/fixIcon';
import{
    FaRegComment,
    FaRetweet,
    FaRegHeart,
    FaShare,
    FaHeart,
    FaEllipsisH,
    FaChartBar,
} from "react-icons/fa";
import {FiMoreHorizontal} from "react-icons/fi";
import {PiSealCheckFill} from "react-icons/pi";

interface TweetProps{
    tweetId:string;
    avatarUrl:string;
    name:string;
    handle:string;
    time:string;
    content:string;
    comments:number;
    retweets:number;
    likes:number;
    onDelete:(tweetId:string) => void;//updated type to expect tweetId
}
export const Tweet =({tweetId,
                     avatarUrl,
                     name,
                     handle,
                     time,
                     content,
                     comments,
                     retweets,
                     likes,
                     onDelete,}: TweetProps) =>{
    const [commentCount, setCommentCount] = useState(comments ||0);
    const [retweetCount, setRetweetCount] = useState(retweets ||0);
    const [likeCount, setLikeCount] = useState(likes || 0);
    const [isLiked, setIsLiked] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const RegComment = fixIcon(FaRegComment);
    const Retweet = fixIcon(FaRetweet);
    const RegHeart = fixIcon(FaRegHeart);
    const Share = fixIcon(FaShare);
    const Heart = fixIcon(FaHeart);
    const EllipsisH = fixIcon(FaEllipsisH);
    const ChartBar = fixIcon(FaChartBar);
    const MoreHorizontal = fixIcon(FiMoreHorizontal);
    const SealCheckFill = fixIcon(PiSealCheckFill);
    const handleMenuToggle = () => setShowMenu(!showMenu);
    const handleLike= async()=>{
        const newLikeCount= likeCount + 1;
        setIsLiked(!isLiked);
        setLikeCount(newLikeCount);
        try{
            const tweetRef = doc(db, "tweets", tweetId);
            await updateDoc(tweetRef, {
              likes: newLikeCount,
            });
        }catch(error){
            console.error("Failed to update likes: ", error);
        }
    };
    const handleRetweet = async()=>{
        const newRetweetCount= retweetCount + 1;
        setRetweetCount(newRetweetCount);

        try{
            const tweetRef = doc(db, "tweets", tweetId);
            await updateDoc(tweetRef, {
                retweets: newRetweetCount,
            });
        }catch(error){
            console.error("Failed to update retweets: ", error);
        }
    };
    const handleComment = async()=>{
        const newCommentCount = commentCount + 1;
        setCommentCount(newCommentCount);

        try{
            const tweetRef = doc(db, "tweets", tweetId);
            await updateDoc(tweetRef, {
               comments:newCommentCount,
            });
        }catch(error){
            console.error("Failed to update comments: ", error);
        }
    };
    const handleDelete = async()=>{
        try{
            const tweetRef = doc(db, "tweets", tweetId);
            await deleteDoc(tweetRef);//Delete the tweet from firebase
            onDelete(tweetId); //pass the tweet ID to the parent component to remove it from state
        } catch(error){
            console.error("Failed to delete tweet: ", error);
        }
    }
    return (
        <div className={styles.tweet}>
            <img src ={avatarUrl} alt={`${name}'s avatar`} className={styles.avatar}/>
            <div className={styles.tweetContent}>
                <div className={styles.header}>
                    <span className={styles.name}>{name}</span>
                    <span className={styles.handle}>
                        @{handle} <SealCheckFill className={styles.verifiedIcon}/>
                    </span>
                    <span className={styles.time}> . {time}</span>
                    <MoreHorizontal
                        className={styles.moreIcon}
                        onClick={handleMenuToggle}
                    />
                    {showMenu && (
                        <div className={styles.menu}>
                            <div onClick={handleDelete} className={styles.menuItem}>
                                Delete
                            </div>
                            <div className={styles.menuItem}>Unpin from profile</div>
                            <div className={styles.menuItem}>Add/remove from Highlights</div>
                            <div className={styles.menuitem}>
                                Add/remove @{handle} from Lists
                            </div>
                            <div className={styles.menuItem}>Change who can reply</div>
                            <div className={styles.menuItem}>View post engagements</div>
                            <div className={styles.menuItem}>Embed post</div>
                            <div className={styles.menuItem}>View post analytics</div>
                            <div className={styles.menuItem}>Request Community Note</div>
                        </div>
                    )}
                </div>
                <div className={styles.body}>
                    <p>{content}</p>
                </div>
                <div className={styles.actions}>
                    <div className={styles.action} onClick={handleComment}>
                        <RegComment className={styles.icon}/>
                    </div>
                    <div className={styles.action} onClick={handleRetweet}>
                        <Retweet className={styles.icon}/>
                    </div>
                    <div className={styles.action} onClick={handleLike}>
                        {isLiked ? (
                            <Heart className={`${styles.icon} ${styles.liked}`}/>
                        ): (
                            <RegHeart className={styles.icon}/>
                        )}
                        <span>{likeCount}</span>
                    </div>
                    <div className={styles.action}>
                        <ChartBar className={styles.icon}/>
                        <span>
                            {Math.floor(Math.random() * 5000000 + 1000).toLocaleString()}
                        </span>{" "}
                    </div>
                    <div className={styles.action}>
                        <Share className={styles.icon}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Tweet;