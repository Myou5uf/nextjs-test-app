import MainContainer from '../../components/MainContainer';

export default function User ({user}) {
  return (
    <MainContainer title={user.name} keywords="Пользователь">
      <h1>Пользователь с Id = {user.id}</h1>
      <div className='user'>
        <p>Имя пользоватея - ${user.name}</p>
      </div>
    </MainContainer>
  )
}

export const getServerSideProps = (async ({params}) => {
  const url = `https://jsonplaceholder.typicode.com/users/${params.id}`;
  const response = await fetch(url);
  const user = await response.json();

  return { props: { user } }
})
