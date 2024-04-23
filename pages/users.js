import A from '../components/A';
import styles from '../styles/user.module.scss';
import MainContainer from '../components/MainContainer';

const Users = ({users}) => {

  return (
    <MainContainer title="Список пользователей" keywords="Список пользователей">
      <h1>Список пользователей</h1>
      <main>
        <ul className={styles.list}>
          {users?.map((user) =>
            <li key={user.id} className={styles.list__item}>
              <A href={`/users/${user.id}`}>
                <div className={styles.card}>
                  <span>{user.id}. </span>
                  {user.name}
                </div>
              </A>
            </li>
          )}
        </ul>
      </main>
    </MainContainer>
  );
};

export default Users;


export const getStaticProps = (async () => {
  const url = 'https://jsonplaceholder.typicode.com/users';
  const response = await fetch(url);
  const users = await response.json();

  return { props: { users } }
})
