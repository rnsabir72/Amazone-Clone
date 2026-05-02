import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

function Address() {
  const [savedAddress, setSavedAddress] = useState("");

  useEffect(() => {
    const address = localStorage.getItem("userAddress");
    if (address) {
      setSavedAddress(address);
    }
  }, []);

  const handleAddressSave = (event) => {
    event.preventDefault();
    const address = event.target.elements.address.value;
    if (address) {
      setSavedAddress(address);
      localStorage.setItem("userAddress", address);
    }
  };

  const openGoogleMaps = () => {
    window.open("https://www.google.com/maps", "_blank");
  };

  return (
    <div style={{ paddingTop: "80px", minHeight: "100vh", backgroundColor: "#eaeded" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto", paddingTop: "30px" }}>
        {/* Breadcrumb */}
        <div style={{ fontSize: "12px", marginBottom: "20px", color: "#007185" }}>
          <Link to="/" style={{ color: "#007185", textDecoration: "none" }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{ verticalAlign: "middle", marginRight: "3px" }}>
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
            </svg>
            Home
          </Link>
          <span style={{ margin: "0 5px" }}>&gt;</span>
          <span style={{ color: "#0f1111" }}>Add your address</span>
        </div>

        <div style={{
          backgroundColor: "#ffffff",
          border: "1px solid #d5d9d9",
          borderRadius: "8px",
          padding: "40px",
          marginBottom: "30px"
        }}>
          <h1 style={{
            marginBottom: "30px",
            fontSize: "28px",
            fontWeight: "400",
            color: "#0f1111",
            borderBottom: "1px solid #d5d9d9",
            paddingBottom: "15px"
          }}>
            Add your address
          </h1>

          <form onSubmit={handleAddressSave}>
            <div style={{ marginBottom: "25px" }}>
              <label style={{
                display: "block",
                marginBottom: "8px",
                fontSize: "14px",
                fontWeight: "400",
                color: "#0f1111"
              }}>
                Where do you want deliveries to go?
              </label>
              <div style={{ position: "relative" }}>
                <i className="fas fa-map-marker-alt"
                   style={{
                     position: "absolute",
                     left: "10px",
                     top: "50%",
                     transform: "translateY(-50%)",
                     color: "#007185",
                     fontSize: "18px"
                   }}>
                </i>
                <input
                  type="text"
                  name="address"
                  placeholder="Enter a full address"
                  style={{
                    width: "100%",
                    padding: "12px 12px 12px 38px",
                    fontSize: "16px",
                    border: "1px solid #d5d9d9",
                    borderRadius: "4px",
                    outline: "none",
                    boxSizing: "border-box"
                  }}
                  onFocus={(e) => e.target.style.borderColor = "#e77600"}
                  onBlur={(e) => e.target.style.borderColor = "#d5d9d9"}
                  required
                />
              </div>
            </div>

            <div style={{ display: "flex", gap: "15px", marginTop: "30px" }}>
              <Button
                type="submit"
                variant="contained"
                style={{
                  backgroundColor: "#ffd814",
                  color: "#0f1111",
                  padding: "10px 24px",
                  borderRadius: "20px",
                  fontSize: "14px",
                  fontWeight: "400",
                  textTransform: "none"
                }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#f7ca00"}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = "#ffd814"}
              >
                Use this address
              </Button>

              <Button
                type="button"
                variant="outlined"
                onClick={openGoogleMaps}
                style={{
                  backgroundColor: "transparent",
                  color: "#007185",
                  padding: "10px 24px",
                  borderRadius: "20px",
                  fontSize: "14px",
                  fontWeight: "400",
                  textTransform: "none",
                  border: "1px solid #d5d9d9"
                }}
                onMouseOver={(e) => e.currentTarget.style.borderColor = "#e77600"}
                onMouseOut={(e) => e.currentTarget.style.borderColor = "#d5d9d9"}
              >
                Find on map
              </Button>
            </div>
          </form>
        </div>

        {savedAddress && (
          <div style={{
            backgroundColor: "#ffffff",
            border: "1px solid #d5d9d9",
            borderRadius: "8px",
            padding: "24px",
            marginTop: "20px"
          }}>
            <h3 style={{
              marginBottom: "15px",
              fontSize: "16px",
              fontWeight: "400",
              color: "#0f1111"
            }}>
              Your saved address:
            </h3>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
              <i className="fas fa-check-circle"
                 style={{
                   color: "#007185",
                   fontSize: "20px",
                   marginTop: "2px"
                 }}>
              </i>
              <p style={{
                fontSize: "16px",
                color: "#0f1111",
                lineHeight: "1.5"
              }}>
                {savedAddress}
              </p>
            </div>
          </div>
        )}

        {/* Help section */}
        <div style={{ marginTop: "30px", fontSize: "12px", color: "#007185" }}>
          <p>
            Having trouble?{" "}
            <span
              style={{ color: "#007185", textDecoration: "underline", cursor: "pointer" }}
              onClick={() => alert('Customer service would open here')}
              role="link"
              tabIndex="0"
            >
              Contact customer service
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Address;
