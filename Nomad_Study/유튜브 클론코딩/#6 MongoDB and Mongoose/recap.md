# 6.0 Array Database

- href="edit"과 href="/edit"의 차이점.

`localhost:4000/profile/edit-profile/password`의 url이 있다고 가정하면.

- href="edit"은 (relative url)

localhost:4000/profile/edit-profile/password/edit으로 이동하고

- href="/edit" (absolute url)
  localhost:4000/edit 으로 이동한다.

# 6.1 Edit Video

- post 방식은 파일을 보내거나 database에 있는 값을 바꾸는 뭔가를 보낼 때 사용

```js
videoRouter.get("/:id(\\d+)/edit", getEdit);
videoRouter.post("/:id(\\d+)/edit", postEdit);

videoRouter.route("/:id(\\d+)/edit").get(getEdit).post(postEdit);
```

- route를 이용해 두줄을 한줄로 줄일 수 있다.

```js
return res.end();

return res.redirect();
```

- res.redirect();은 브라우저가 redirect(자동으로 이동)하도록 하는 것.
- 브라우저는 우리가 준 url로 이동한다.
- 즉, Edit Video를 누르고 save 버튼을 누르면 watch 페이지로 돌아가도록 하는 것이다.

```js
export const getEdit = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  return res.render("edit", { pageTitle: `Editing: ${video.title}`, video });
};

export const postEdit = (req, res) => {
  const { id } = req.params;
  return res.redirect(`/videos/${id}`);
};
```

- 먼저, 유저가 getEdit으로 온다.
- 그러면 우린 편집용 form을 render 시켜주고, 유저가 submit 하면 우리의 post request로 이동해서 postEdit이 처리해 줄텐데, postEdit은 route로부터 id를 얻어와서 /videos/id 페이지로 redirect 시켜준다.

- app.use(express.urlencoded({ extended: true }));
- 우리의 express application이 form의 value들을 이해할 수 있도록 하고, 우리가 쓸 수 있는 자바스크립트 형식으로 변형시켜준다.
