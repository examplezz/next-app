import styles from '../styles/About.module.css'

const Ui = () => (<h1>Lol</h1>)
const data = () => ("55")

const c = () => (
    <div className={styles.container}>
        <h1 className={styles.heading}>About</h1>
        <Ui/>
        <div>{data()}</div>
    </div>
)

export default c