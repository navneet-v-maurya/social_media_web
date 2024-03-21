const generic_error = {
  message: "Something went wrong!",
  status: 500,
};

const default_catch = (error, resolve) => {
  if (error.response) {
    resolve(error.response);
  } else {
    resolve(generic_error);
  }
};

export default default_catch;
