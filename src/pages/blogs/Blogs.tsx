import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import Media from "../../components/ui/card/Card";
import { IBlog } from "../../models/config";

const Blogs = () => {

  const [blogList, setBlogData] = useState<IBlog[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(
    () => {
      let timer1 = setTimeout(() => {
        console.log(BlogData);
        setBlogData(BlogData);
        setLoading(false);
      }, 3 * 1000);

      // this will clear Timeout
      // when component unmount like in willComponentUnmount
      // and show will not change to true
      return () => clearTimeout(timer1);
    }, []
  );

  function BlogGrid({isLoading}: { isLoading: boolean }) {
    const arr = isLoading ? Array.from(Array(6)) : blogList;
    return (
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {arr.map((el, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Media loading={isLoading} data={el} />
          </Grid>
        ))}
      </Grid>
    )
  }

  return (
    <>
      <h2>Blogs</h2>

      <BlogGrid isLoading={loading}/>
    </>
  )
};

const BlogData = [
  {
    id: 1,
    title: "sunt aut facere repellat",
    body: "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto",
    created_at: new Date(1658919234314)
  },
  {
    id: 2,
    title: "qui est esse",
    body: "est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla",
    created_at: new Date(1658912294314)
  },
  {
    id: 3,
    title: "ea molestias quasi",
    body: "et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut",
    created_at: new Date(1658919294314)
  },
];

export default Blogs;