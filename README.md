# single-spa-demo

In this project we demonstrate how to wrap different apps inside a layout app with a shared store and utils module.

Steps:
1. Install with `npm i` in each repo.
2. Build using `npm run build` in each repo.
3. Start the root-config project using `npm start`. Default port 9000
4. Serve every other project locally on the following ports:
- vue-app-1 (layout) on 9001
- vue-app-2 on 9002
- react-app on 9003
- utils on 9004

Or change the expected ports in "root-config/src/index.ejs"