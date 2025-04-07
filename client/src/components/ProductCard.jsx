import PropTypes from "prop-types";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import formStyle from "../util/formStyle";
import ShareButton from "./ShareButton";

const ProductCard = ({ product, isInCart, toggleCartItem, isOrderStage }) => {
  const navigate = useNavigate();
  const [validToken, setValidToken] = useState("");

  const token = localStorage.getItem("authToken");

  useEffect(() => {
    if (!token) {
      console.error("No token. User not authorised.");
      setValidToken("");
      return;
    }

    try {
      const decodedToken = jwtDecode(token);
      setValidToken(decodedToken.id);
    } catch (error) {
      console.error("Token decoding error:", error);
    }
  }, [token]);

  const handleNavigate = useCallback(() => {
    navigate(`/items/${product._id}`);
  }, [navigate, product._id]);

  const handleToggleCart = useCallback(() => {
    toggleCartItem(product);
  }, [toggleCartItem, product]);

  return (
    <Box
      sx={{
        flex: "1 1 calc(25% - 16px)",
        maxWidth: "calc(25% - 16px)",
        boxSizing: "border-box",

        "@media (max-width:1200px)": {
          flex: "1 1 calc(33.33% - 16px)",
          maxWidth: "calc(33.33% - 16px)",
        },
        "@media (max-width:900px)": {
          flex: "1 1 calc(50% - 16px)",
          maxWidth: "calc(50% - 16px)",
        },
        "@media (max-width:600px)": {
          flex: "1 1 100%",
          maxWidth: "100%",
        },
      }}
    >
      <Card sx={{ position: "relative", ...formStyle.card }}>
        {!isOrderStage && (
          <Box
            sx={{
              position: "absolute",
              top: { xs: 8, sm: 10, md: 12 },
              right: { xs: 6, sm: 8, md: 10 },
              zIndex: 1,
            }}
          >
            <ShareButton item={{ id: product._id, title: product.title }} />
          </Box>
        )}

        <CardContent>
          <Box sx={{ cursor: "pointer" }} onClick={handleNavigate}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                paddingTop: "2.5rem",
              }}
            >
              <CardMedia
                component="img"
                image={product.photo}
                alt={product.title}
                sx={{
                  width: "180px",
                  height: "180px",
                  objectFit: "cover",
                  mb: 3,
                }}
              />
            </Box>

            <Typography
              variant="h6"
              color="text.secondary"
              sx={{
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                minHeight: "3.2em",
                wordBreak: "break-word",
              }}
            >
              {product.title}
            </Typography>
            <Typography variant="h6" color="primary" sx={{ mt: 1 }}>
              €{product.price}
            </Typography>
          </Box>

          <Box sx={{ mt: 2, display: "flex", flexDirection: "column", gap: 2 }}>
            {validToken === product.seller_id ? (
              <Button
                variant="contained"
                color="secondary"
                onClick={handleNavigate}
                sx={{ ...formStyle.buttonWide, mt: 0 }}
              >
                View details
              </Button>
            ) : (
              <Button
                variant={isInCart ? "outlined" : "contained"}
                color={isInCart ? "secondary" : "primary"}
                onClick={handleToggleCart}
                sx={
                  isInCart
                    ? { ...formStyle.buttonWide, color: "#178388", mt: 0 }
                    : { ...formStyle.buttonWide, color: "#ffffff", mt: 0 }
                }
              >
                {isInCart ? "Remove from Cart" : "Add to Cart"}
              </Button>
            )}
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
  isInCart: PropTypes.bool.isRequired,
  toggleCartItem: PropTypes.func.isRequired,
  isOrderStage: PropTypes.bool.isRequired,
};

export default ProductCard;
