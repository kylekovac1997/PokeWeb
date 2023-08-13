import { useParams } from "react-router-dom";
import NewsData from "./NewsData.json";
import { Wrap } from "@chakra-ui/react";
import {
  Feature1,
  NewsDate,
  NewsImage,
  NewsText,
  NewsTitle,
} from "../../componets/styled/news/NewsPageStyled";

function NewsInfoPage() {
  const { name } = useParams();

  const selectedNews = NewsData.find((news) => news.name === name);

  if (!selectedNews) {
    return <div>News not found</div>;
  }

  return (
    <>
      <NewsImage>
        <img src={selectedNews.divImage} alt="" />
        <Feature1 />
      </NewsImage>
      <Wrap
        spacing="10px"
        padding="10px"
        w="900px"
        style={{
          backgroundColor: " #ffffff",
          borderBottom: "solid 100px transparent",
          borderTop: "solid 40px transparent",
        }}
      >
        <br />
        <NewsDate> {selectedNews.date}</NewsDate>
        <br />
        <h3>{selectedNews.name}</h3>
        <br />
        <NewsTitle>{selectedNews.title}</NewsTitle>
        <br />
        <NewsText>{selectedNews.description}</NewsText>
        {selectedNews.info && (
          <div>
            <ul>
              {selectedNews.info.map((data, index) => (
                <div key={index}>
                  {typeof data === "string" ? (
                    <p>{data}</p>
                  ) : data.title ? (
                    <>
                      <h2>{data.title}</h2>
                      {data.image && <img src={data.image} alt={data.title} />}
                      <p>{data.description}</p>
                    </>
                  ) : null}
                </div>
              ))}
            </ul>
          </div>
        )}
      </Wrap>
    </>
  );
}

export default NewsInfoPage;
