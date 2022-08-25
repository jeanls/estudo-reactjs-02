import styles from './Sidebar.module.css'
import {PencilSimpleLine} from 'phosphor-react'
import {Avatar} from "../avatar/Avatar.js";

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img
                className={styles.cover}
                alt=""
                src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
            />
            <div className={styles.profile}>
                <Avatar
                    hasBorder
                    src="https://avatars.githubusercontent.com/u/7081175?v=4"
                />

                <strong>Jean Leal Silva</strong>
                <span>Backend Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilSimpleLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}
