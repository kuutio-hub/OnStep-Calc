
export const TEMPLATE_ONSTEP_CLASSIC = `
// Configuration for OnStep
#define PINMAP                        OFF
#define SERIAL_A_BAUD_DEFAULT        9600
#define MOUNT_TYPE                    GEM
#define AXIS1_STEPS_PER_DEGREE    12800.0
#define AXIS1_DRIVER_MODEL            OFF
#define AXIS1_DRIVER_MICROSTEPS       OFF
#define AXIS1_DRIVER_MICROSTEPS_GOTO  OFF
#define AXIS1_DRIVER_REVERSE          OFF
#define AXIS2_STEPS_PER_DEGREE    12800.0
#define AXIS2_DRIVER_MODEL            OFF
#define AXIS2_DRIVER_MICROSTEPS       OFF
#define AXIS2_DRIVER_MICROSTEPS_GOTO  OFF
#define AXIS2_DRIVER_REVERSE          OFF
#define SLEW_RATE_BASE_DESIRED        2.5
// Note: This is a placeholder for the full template structure.
// In a real usage, the entire Config.h content would be here.
`;

export const TEMPLATE_ONSTEPX = `
/* ---------------------------------------------------------------------------------------------------------------------------------
 * Configuration for OnStepX
 */
#define PINMAP                  FYSETC_E4
#define SERIAL_A_BAUD_DEFAULT        9600
#define MOUNT_TYPE                    GEM
#define AXIS1_DRIVER_MODEL        TMC2209
#define AXIS1_STEPS_PER_DEGREE      12800
#define AXIS1_REVERSE                 OFF
#define AXIS1_DRIVER_MICROSTEPS        32
#define AXIS1_DRIVER_MICROSTEPS_GOTO    4
#define AXIS2_DRIVER_MODEL        TMC2209
#define AXIS2_STEPS_PER_DEGREE      12800
#define AXIS2_REVERSE                 OFF
#define AXIS2_DRIVER_MICROSTEPS        32
#define AXIS2_DRIVER_MICROSTEPS_GOTO    4
#define SLEW_RATE_BASE_DESIRED        2.5
// Note: This is a placeholder for the full template structure.
`;
