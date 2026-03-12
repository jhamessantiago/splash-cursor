"use strict";

/**
 * UPDATED GENERATE COLOR FUNCTION
 * Pale Teal / Blue-Green
 * Low-dim (Scale: 0.15)
 */
function generateColor() {
    let color = {
        r: 210 / 255, // High red desaturates the teal into a "pale" shade
        g: 250 / 255, // Teal/Green base
        b: 245 / 255  // Blue-Green base
    };

    // Scaling factor of 0.15 for a very dim, subtle look
    const scale = 0.15;
    color.r *= scale;
    color.g *= scale;
    color.b *= scale;

    return color;
}

// ... Rest of your configuration ...
const canvas = document.querySelector(".splash-canvas"),
    homePageBody = document.querySelector("body"),
    mainWrapper = document.querySelector("#main"),
    modeChangeButton = document.querySelector(".theme-button");

resizeCanvas();

let config = {
    SIM_RESOLUTION: 128,
    DYE_RESOLUTION: 1024,
    CAPTURE_RESOLUTION: 512,
    DENSITY_DISSIPATION: 4,
    VELOCITY_DISSIPATION: 2.87,
    PRESSURE: .43,
    PRESSURE_ITERATIONS: 20,
    CURL: 0,
    SPLAT_RADIUS: .28,
    SPLAT_FORCE: 5e3,
    SHADING: !0,
    COLORFUL: !0, // Set to true to allow the fluid to update colors based on the logic above
    COLOR_UPDATE_SPEED: 10,
    PAUSED: !1,
    BACK_COLOR: { r: 0, g: 0, b: 0 },
    TRANSPARENT: !1,
    BLOOM: !0,
    BLOOM_ITERATIONS: 8,
    BLOOM_RESOLUTION: 256,
    BLOOM_INTENSITY: .1,
    BLOOM_THRESHOLD: .6,
    BLOOM_SOFT_KNEE: .7,
    SUNRAYS: !0,
    SUNRAYS_RESOLUTION: 196,
    SUNRAYS_WEIGHT: .7
};

// ... (Rest of the WebGL logic remains the same)
