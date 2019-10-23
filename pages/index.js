import Layout from '../comps/layout';
import Link from 'next/link';

const PostLink = props => (
  <li>
    <Link href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
);
export default function Blog() {
  return (
    <Layout>
      <h1>My Blog</h1>
      <ul>
        <PostLink title="alpha" />
        <PostLink title="beta" />
        <PostLink title="gamma" />
      </ul>
    </Layout>
  );
}