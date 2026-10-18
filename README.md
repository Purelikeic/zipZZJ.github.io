# zipZZJ.github.io

Hello! I am Zhijie Zhao (赵志杰), a master’s student in Electronic Science and Technology at Huazhong University of Science and Technology. My research focuses on processor architecture, digital IC design, processor microarchitecture, and cache subsystems.

This github repo is my personal homepage. You can visit it at [zipZZJ.github.io](https://purelikeic.github.io/zipZZJ.github.io/).

Feel free to contact me at [z.zhijie@outlook.com](mailto:z.zhijie@outlook.com).

Feel free to modify the code and content to make your own homepage!

## Installation

If you want to use this template to make your own homepage, you can follow the steps below:

- Fork this repo, and rename it to `your_username.github.io`
- Clone this repo to your local machine via `git clone https://github.com/<your_username>/<your_username>.github.io.git`
- `cd <your_username>.github.io`
- `npm install` (you may need to install `npm` first)
- Modify the source code to fit your own information. You may need to modify the following files:
  - `index.html`: modify the page title and meta description
  - `src/data/experiences.ts`, `src/data/projects.ts`, and `src/data/awards.ts`: modify the personal content.
  - `public/XXX`: replace the logos, CV, and avatar placeholder with your own assets
  - `src/views/HomeView.vue`: modify the content of the homepage and the language switcher.

It's all settle! Now you can execute `npm run dev` and preview your homepage at `http://localhost:3000/`.

If you want to publish your homepage online, you can execute `npm run deploy`. It will automatically build your homepage and push it to the `gh-pages` branch.

After enabling GitHub Pages in the settings of your repo, you can visit your homepage at `https://<your_username>.github.io/<repository>/`!
