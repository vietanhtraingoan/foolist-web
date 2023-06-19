import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.NEXT_PUBLIC_MAIL_API_KEY);

export async function sendEmail(req, res) {
  try {
    await sendgrid.send({
      to: "tuanbinh.35@gmail.com",
      from: "binhtuandang35@gmail.com",
      subject: "Request for more information about services.",
      html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html lang="en">
      <head>
        <meta charset="utf-8">

        <title>The HTML5 Herald</title>
        <meta name="description" content="The HTML5 Herald">
        <meta name="author" content="SitePoint">
      <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />

        <link rel="stylesheet" href="css/styles.css?v=1.0">

      </head>

      <body>
        <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">
              </div>
              <div class="container" style="margin-left: 20px;margin-right: 20px;">
              <h3>You've got a new mail from ${req.body.fullname}, their email is: ${req.body.email}, their phone number is: ${req.body.phone} </h3>
              <div style="font-size: 16px;">
              <p>Message:</p>
              <p>${req.body.message}</p>
              <br>
              </div>
              </div>
              </div>
      </body>
      </html>`,
    });
  } catch (error) {
    console.log(error);
    return res.status(error.statusCode).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
}

