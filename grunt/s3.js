module.exports = {
  options: {
    accessKeyId: "<%= aws.accessKeyId %>",
    secretAccessKey: "<%= aws.secretAccessKey %>",
    bucket: "proto-sandbox-kingcounty-gov",
    region: "us-west-2"
    //dryRun: true
  },
  build: {
    cwd: "<%= public %>/",
    src: "**",
    exclusions: ["<%= public %>/html','<%= public %>/kctv-schedule"]
  }
};