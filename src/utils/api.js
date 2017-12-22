import axios from 'axios';

const URI_BASE = "https://localhost:16002/boot/api";

const URIS = {
  "news": URI_BASE + "/news",
  "publish": URI_BASE + "/publish",
  "projects": URI_BASE + "/projects",
}

const get = (url, callback) => {
  return axios.get(url)
    .then(function (res) {
      callback(res.data.data);
    });
}

const getAllNews = (callback) => {
  return get(URIS.news, callback);
}
const getNews = (i, callback) => {
  return get(URIS.news + "/" + i, callback);
}
const getNewsLatest = (i, callback) => {
  return get(URIS.news + "/latest?n=" + i, callback);
}
const getNewsTotalPageCount = (callback) => {
  return get(URIS.news + "/pageCount", callback)
}
const getNewsCurrentPage = (i, callback) => {
  return get(URIS.news + "/?p=" + i, callback);
}

const getAllPublish = (callback) => {
  return get(URIS.publish, callback);
}
const getPublish = (i, callback) => {
  return get(URIS.publish + "/" + i, callback);
}
const getPublishLatest = (i, callback) => {
  return get(URIS.publish + "/latest?n=" + i, callback);
}
const getPublishTotalPageCount = (callback) => {
  return get(URIS.publish + "/pageCount", callback)
}
const getPublishCurrentPage = (i, callback) => {
  return get(URIS.publish + "/?p=" + i, callback);
}


const getAllProjects= (callback) => {
  return get(URIS.projects, callback);
}
const getProject = (i, callback) => {
  return get(URIS.projects + "/" + i, callback);
}
const getProjectsLatest = (i, callback) => {
  return get(URIS.projects + "/latest?n=" + i, callback);
}
const getProjectsTotalPageCount = (callback) => {
  return get(URIS.projects + "/pageCount", callback)
}
const getProjectsCurrentPage = (i, callback) => {
  return get(URIS.projects + "/?p=" + i, callback);
}

export {
  getAllNews,
  getNews,
  getNewsLatest,
  getNewsTotalPageCount,
  getNewsCurrentPage,

  getAllPublish,
  getPublish,
  getPublishLatest,
  getPublishTotalPageCount,
  getPublishCurrentPage,

  getAllProjects,
  getProject,
  getProjectsLatest,
  getProjectsTotalPageCount,
  getProjectsCurrentPage,
}
