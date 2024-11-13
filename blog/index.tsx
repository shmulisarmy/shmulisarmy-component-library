import { Component, JSX } from 'solid-js';
import styles from "./.module.css";
import Tabs from "state-sraft/src/reusable_components/Tabs";
import Profile from "../profile";

type Blog_small_text_type = string | { [key: string]: string };

interface BlogProps {
  title: string;
  headline: string;
  content: Blog_small_text_type;
  imageUrl: string;
  place_first: 'text' | 'image';
  children?: JSX.Element;
}

function BlogText(props: { title: string; headline: string; content: Blog_small_text_type, children?: JSX.Element }) {
  let text_display;
  if (typeof props.content === 'string') {
    text_display = <p>{props.content}</p>;
  } else {
    text_display = (
      <Tabs options={props.content}>
        {page => <p style={{ padding: "1em" }}>{page}</p>}
      </Tabs>
    );
  }

  return (
    <div class={styles.text}>
      <h1>{props.title}</h1>

      <h2>{props.headline}</h2>
      {text_display}
      {props.children}
      <div
        style={{
          display: "flex",
          "justify-content": "space-between",
          "align-items": "center",
          gap: "1em",
        }}
      >
        <Profile
          name="John"
          text="Author"
          img_link="data:image/jpeg;base64,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"
        />
        <a href="#" class={styles.button}>
          Read More
        </a>
      </div>
    </div>
  );
}


function Blog(props: BlogProps): JSX.Element {
  const contentOrder = props.place_first === 'text' ? (
    <>
      <BlogText title={props.title} headline={props.headline} content={props.content}>
        {props.children}
      </BlogText>
      <img src={props.imageUrl} alt={props.headline} />
    </>
  ) : (
    <>
      <img src={props.imageUrl} alt={props.headline} />
      <BlogText title={props.title} headline={props.headline} content={props.content}>
        {props.children}
      </BlogText>
    </>
  );

  return <div class={styles.blog}>{contentOrder}</div>;
};

export default Blog;
