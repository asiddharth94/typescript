module.exports = {
  entry: "./app/app.ts",
  devtool: "inline-source-map",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  // tells webpack which files it should use for module resolution
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  // specifies the name of the bundle file webpack will produce.
  // This is the name of the file that'll be sent to the browser
  output: {
    filename: "bundle.js",
  },
  devServer: {
    inline: false,
  },
};

// Running npm start script will invoke webpack with this configuration file
// tsc-loader will compile the typescript
// webpack will bundle the compiled/output js file and start the development server

// by default, webpack dev server won't actually write a file to the disk named bundle.js
// it will just be created in the memory and served to the browser
// so we won't see that show up as a new file in the project
