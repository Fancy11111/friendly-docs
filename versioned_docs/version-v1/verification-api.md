# Verification API

You will need an API key to prove it's you, you can create one on the [**API Keys page**](https://app.friendlycaptcha.eu/dashboard) in the dashboard.

To verify the CAPTCHA solution, make a POST request to `https://api.friendlycaptcha.com/api/v1/siteverify` with the following parameters:

| POST Parameter | Description                                         |
|----------------|-----------------------------------------------------|
| `solution`       | The solution value that the user submitted in the `frc-captcha-solution` field         |
| `secret`         | An API key that proves it's you, create one on the Friendly Captcha website |
| `sitekey`        | **Optional:** the sitekey that you want to make sure the puzzle was generated from. |

You can pass these parameters in a JSON body, or as formdata.

> If your account is on the **Advanced** or **Enterprise** plan your server can also make a request [to our EU endpoint](./eu_endpoint).

### The verification response

The response will tell you whether the CAPTCHA solution is valid and hasn't been used before. The response body is a JSON object:

```JSON
{
  "success": true|false,
  "errors": [...] // optional
}
```

If `success` is false, `errors` will be a list containing at least one of the following error codes below. **If you are seeing status code 400 or 401 your server code is probably not configured correctly.**


| Error code   | Status |Description |
|----------------|----------|-------------------------------------------|
| `secret_missing`       | 400 | You forgot to add the secret (=API key) parameter. |
| `secret_invalid`       | 401 | The API key you provided was invalid. |
| `solution_missing` | 400 | You forgot to add the solution parameter. |
| `bad_request` | 400 | Something else is wrong with your request, e.g. your request body is empty. |
| `solution_invalid` | 200 | The solution you provided was invalid (perhaps the user tried to tamper with the puzzle). |
| `solution_timeout_or_duplicate` | 200 | The puzzle that the solution was for has expired or has already been used. |


> ⚠️ Status code 200 does not mean the solution was valid, it just means the verification was performed succesfully. Use the `success` field.

A solution can be invalid for a number of reasons, perhaps the user submitted before the CAPTCHA was completed or they tried to change the puzzle to make it easier. The first case can be prevented by disabling the submit button until the CAPTCHA has been completed succesfully.

### Verification Best practices
If you receive a response code other than 200 in production, you should probably accept the user's form despite not having been able to verify the CAPTCHA solution.

Maybe your server is misconfigured or the Friendly Captcha servers are down. While we try to make sure that never happens, it is a good idea to assume one day disaster will strike.

An example: you are using Friendly Captcha for a sign up form and you can't verify the solution. It is better to trust the user and let them sign up anyway, because otherwise no signup will be possible at all. Do send an alert to yourself!

