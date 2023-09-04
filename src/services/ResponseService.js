const ResponseService = {};

// -------------------------------------------------------------------------- //
// send
// -------------------------------------------------------------------------- //
ResponseService.send = (data, req, res) => {
  try {
    const result = {
      success: true,
      data,
    };

    res.status(200).json(result);
  } catch (error) {
    throw error;
  }
};

// -------------------------------------------------------------------------- //
// exports
// -------------------------------------------------------------------------- //
export default ResponseService;
