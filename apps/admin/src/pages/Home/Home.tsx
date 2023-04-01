import { useSearchArticlesQuery } from 'apollo-hooks';
import { Button } from 'ui';

function Home() {
  const { data } = useSearchArticlesQuery();
  const articles = data?.articles;
  console.log('articles', articles);
  const flatArticles = articles?.results.flatMap(({}) => {})
  return (
    <div>
      <h1>Admin</h1>
      <div>
        {data?.articles?.results?.map((article) => (
          <p key={article.id}> {article.title}</p>
        ))}
      </div>
      <Button>Beep</Button>
    </div>
  );
}

export default Home;
