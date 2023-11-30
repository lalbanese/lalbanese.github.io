This repository holds the source code for [libbyalbanese.com](https://libbyalbanese.com/) and [lalbanese.github.io](https://lalbanese.github.io/).

### How to develop

In `package.json`, remove the `"homepage"` field. Use `npm run local` to develop at `localhost:3000`.

### How to publish

Publishing the site is a bit of a manual process. On the `production` branch (the GitHub action in `.github/workflows/static.yml` will only publish the production branch), use `npm run build`. Copy all the files from `build` onto the top level with:
```bash
rm -rf static/
mv build/* .
```

Commit this change, then push to github (**IMPORTANT**: only push the build to the `production` branch).
