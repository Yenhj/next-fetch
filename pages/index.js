import Head from "next/head";
import Image from "next/image";
import HeaderInfo from "../components/HeaderInfo";
import styles from "../styles/Home.module.css";

export default function Home({ cats }) {
  return (
    <>
      <h1>Cats World</h1>
    </>
  );
}

// CSR : Client-Side-Rendering
// SSR : Server-Side-Rendering ( 요청시 HTML 생성 후 브라우저 출력)
// SSG : Static-Site-Generation ( 서버에서 미리 HTML 생성, 변경불가)

// 1. SSR 적용
// 데이터 호출 후 Response 된 결과를 Props로 전달한다. (자동으로)
// 서버에서 데이터 바꾸고 다시 돌리면 client도 변경됨. (새로고침 시)
// export const getServerSideProps = async () => {
//   // const res = await fetch(
//   //  `https://api.thecatapi.com/v1/breeds?api_key=${process.env.NEXT_PUBLIC_CATS_KEY}&limit=10`
//   // );
//   const res = await fetch("http://localhost:8080/api/cats");
//   const cats = await res.json();
//   return {
//     props: {
//       cats,
//     },
//   };
// };

// 2. SSG 적용 (Static-Site-Generation)
//    npm run build 할때 html을 미리 만들어서 포함한다.
//    새로고침을 해도 내용 갱신이 안된다.
//    but, 미리 만들어져 있어서 엄청 빨리 화면에 출력
//    so, Next.js 에서는 SSG 적극 추천 why? SEO 도 잘됨
//    getStaticProps 지원
// export const getStaticProps = async () => {
//   const res = await fetch("http://localhost:8080/api/cats");
//   const cats = await res.json();
//   return {
//     props: {
//       cats,
//     },
//     revalidate: 20,
//   };
// };
