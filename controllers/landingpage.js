/**
 * GET /react
 * Landingpage Unauthenticated.
 */

exports.getHome = function(req, res) {
  res.render('landing_page/home', {
    title: 'Landing Page'
  });
};

exports.getFeatures = function(req, res) {
  res.render('landing_page/features', {
    title: 'Features Page'
  });
};

exports.getServices = function(req, res) {
  res.render('landing_page/services', {
    title: 'Services Page'
  });
};

exports.getPricing = function(req, res) {
  res.render('landing_page/pricing', {
    title: 'Pricing Page'
  });
};

exports.getCharts = function(req, res) {
  res.render('landing_page/charts', {
    title: 'Charts Page'
  });
};

exports.getAboutus = function(req, res) {
  res.render('landing_page/about_us', {
    title: 'About Us Page'
  });
};

exports.getContactus = function(req, res) {
  res.render('landing_page/contact_us', {
    title: 'Contact Us Page'
  });
};

exports.getSupport = function(req, res) {
  res.render('landing_page/support', {
    title: 'Support Page'
  });
};

exports.getSignup = function(req, res) {
  res.render('landing_page/sign_up', {
    title: 'Signup'
  });
};

exports.getStatus = function(req, res) {
  res.render('landing_page/status', {
    title: 'Status Page'
  });
};

exports.getDocs = function(req, res) {
  res.render('landing_page/docs', {
    title: 'Documentation Page'
  });
};

exports.getBlog = function(req, res) {
  res.render('landing_page/blog', {
    title: 'Blog'
  });
};

exports.getBlogpost = function(req, res) {
  res.render('landing_page/blogpost', {
    title: 'Blog Post'
  });
};


