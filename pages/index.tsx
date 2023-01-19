import Head from "next/head";
import { Button } from "../Components/Button/Button";
import { Text } from "../Components/Text/Text";

export default function Home() {
  return (
    <>
      <Head>
        <title>Storybook experiment</title>
        <meta name="description" content="Being tested using storybook" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Button state="default" Type="ghost" text={true} size="small" />
      <Text />
    </>
  );
}
