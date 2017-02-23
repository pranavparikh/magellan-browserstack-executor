export default {
  "bs_browser": {
    "visible": true,
    "type": "string",
    "example": "browsername",
    "description": "Run tests in chrome, firefox, etc (default: phantomjs)."
  },
  "bs_browsers": {
    "visible": true,
    "type": "string",
    "example": "b1,b2,..",
    "description": "Run multiple browsers in parallel."
  },
  "bs_list_browsers": {
    "visible": true,
    "type": "function",
    "description": "List the available browsers configured (Something else integrated)."
  },
  "bs_create_tunnel": {
    "visible": true,
    "type": "boolean",
    "descriptions": "Create secure tunnel in browserstack local mode."
  },
  "bs_tunnel_id": {
    "visible": true,
    "type": "string",
    "example": "testtunnel123123",
    "description": "Use an existing secure tunnel (exclusive with --bs_create_tunnel)"
  }
};
