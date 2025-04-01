const restockNotificationTemplate = (data, frontendUrl:string) => {
  const productUrl = `${frontendUrl}/store/${data?.product?.handle}`;
  const productImage = data?.product?.thumbnail || "";
  const productTitle = data?.product?.title;
  const variantTitle = data?.title;
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Restock Notification</title>
    <style>
        .container {
            max-width: 600px;
            background-color: #000;
            margin: auto;
            color: #fff;
        }
        .header {
            background-color: #000;
            padding: 20px;
            color: #fff;
            border-radius: 8px 8px 0 0;
            text-align: center;
        }
        .content {
            padding: 20px;
            background-color: #fff;
        }
        .product-image {
            max-width: 150px;
            border-radius: 8px;
        }
        .button {
            display: inline-block;
            background-color: #ffffff;
            color: #ffffff;
            text-decoration: none;
            font-size: 18px;
            padding: 12px 20px;
            border-radius: 5px;
            margin-top: 20px;
            transition: background 0.3s ease;
            border: 2px solid #333;
        }
        .button:hover {
            background-color: #808080;
        }
        .footer {
            text-align: center;
            font-size: 0.9em;
            color: #666;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Your Favorite Item is Back in Stock!</h1>
        </div>
        <div class="content">
            <p>Good news! The product you've been waiting for is now back in stock.</p>
            <div style="display: flex; align-items: center; gap: 40px;">
                <div>
                    <img src=${productImage} alt=${productTitle} class="product-image" />
                </div>
                <div style="flex: 1; margin-left: 20px;">
                    <h2 style="font-size: 20px; font-weight: bold; margin: 0 0 5px;">${productTitle}</h2>
                    <p style="margin: 0;">Variant: ${variantTitle}</p>
                    <p>
                        <a href=${productUrl} class="button">Shop Now</a>
                    </p>
                </div>
            </div>
            <p style="margin-top: 15px;">Hurry! Stock is limited.</p>
        </div>
        <hr style="border-color: #e0e0e0; margin: 20px 0;" />
    </div>
</body>
</html>
`;
};

export default restockNotificationTemplate;
