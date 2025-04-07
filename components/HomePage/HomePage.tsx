'use client';
import styles from './HomePage.module.scss';
import RightSidebar from "@/components/RightSidebar";
import Sidebar from "@/components/Sidebar";
import MainContent from "@/components/MainContent";
const HomePage = () =>{
    return(
        <div className={styles.container}>
            <h1>Home Page</h1>
            <Sidebar avatarUrl='https://randomuser.me/api/portraits/men/9.jpg'/>
            <MainContent />
            <RightSidebar />
        </div>
    )
}
export default HomePage;