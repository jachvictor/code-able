import React, { useState } from "react";
import image from "../../assets/codebackground2.png";
import {
  ArticleCover,
  Section,
  SubSection,
  InnerSection,
  Table,
  SubHeader,
  ArticleImg,
  ArticleNote,
  ArticleList,
} from "../../articleContent";
// import { Article } from "../../database";
import { Article } from "../../database";
function Python() {
  const index = 5 - 1;
  const [night, setNight] = useState(false);
  const list = { lists: ["fff", "cddedde"] };
  return (
    <div className="course">
      <ArticleCover
        night={night}
        setNight={setNight}
        title={Article[index].content.title}
        date={Article[index].content.date}
        author={Article[index].content.author}
      />

      <Section
        header={Article[index].content.intro.header}
        text={Article[index].content.intro.content}
        night={night}
      />

      {Article[index].content.intro.list.map((items) => {
        return <ArticleList night={night} item={items} />;
      })}

      <ArticleNote
        night={night}
        header={Article[index].content.intro.note.header}
        text={Article[index].content.intro.note.text}
      />

      <Table
        head={Article[index].content.table.header}
        list={Article[index].content.table.list}
        night={night}
      />
      {Article[index].content.sections.map((items) => {
        return (
          <div>
            <Section
              id={items.id}
              header={items.header}
              text={items.content}
              night={night}
            />
            {items.list.map((lists) => {
              return <ArticleList night={night} item={lists} />;
            })}
            <ArticleNote
              night={night}
              header={items.note.header}
              text={items.note.text}
            />
            {items.img.map((img) => {
              return (
                <ArticleImg night={night} info={img.title} image={img.link} />
              );
            })}

            {items.subsection.map((items1) => {
              return (
                <div>
                  <SubSection
                    header={items1.header}
                    night={night}
                    text={items1.content}
                  />

                  {items1.list.map((lists) => {
                    return <ArticleList night={night} item={lists} />;
                  })}
                  <ArticleNote
                    night={night}
                    header={items1.note.header}
                    text={items1.note.text}
                  />
                  {items1.img.map((items) => {
                    return (
                      <ArticleImg
                        night={night}
                        info={items.title}
                        image={items.link}
                      />
                    );
                  })}

                  {items1.innersection.map((items2) => {
                    return (
                      <div id="sec1">
                        <InnerSection
                          header={items2.header}
                          night={night}
                          text={items2.content}
                        />

                        {items2.list.map((lists) => {
                          return <ArticleList night={night} item={lists} />;
                        })}
                        <ArticleNote
                          night={night}
                          header={items2.note.header}
                          text={items2.note.text}
                        />
                        {items2.img.map((items) => {
                          return (
                            <ArticleImg
                              night={night}
                              info={items.title}
                              image={items.link}
                            />
                          );
                        })}

                        {items2.subheader.map((items3) => {
                          return (
                            <div id="sec1">
                              <SubHeader
                                header={items3.header}
                                night={night}
                                text={items3.content}
                              />

                              {items3.list.map((lists) => {
                                return (
                                  <ArticleList night={night} item={lists} />
                                );
                              })}
                              <ArticleNote
                                night={night}
                                header={items3.note.header}
                                text={items3.note.text}
                              />
                              {items3.img.map((img) => {
                                return (
                                  <ArticleImg
                                    night={night}
                                    info={img.title}
                                    image={img.link}
                                  />
                                );
                              })}
                            </div>
                          );
                        })}
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default Python;
