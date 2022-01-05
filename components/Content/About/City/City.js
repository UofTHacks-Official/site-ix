import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
  line-height: 0;
  margin: 0;
  padding: 0;
`;

export const Art = styled.svg`
  position: absolute;
  display: block;
  width: 100%;
  height: auto;
  bottom: 0;
  left: 0;
`;

const City = () => {
  return (
    <Art
      width="1920"
      height="579"
      viewBox="0 0 1920 579"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1919.72 421.13V578.49H0.00012207V435.24H6.37012V433.26H10.0601V435.24H12.7001V431.15H21.2701V435.24H26.2801V363.5H30.1001L31.2901 362.31V359.68H38.4101L40.1201 357.96V353.08H42.8901V348.99H61.0901L65.3101 351.1V364.29H66.8901V371.02H68.7401V381.7H72.1701V425.87H76.6501V427.85H93.6601V352.69H102.63V349.65H104.48V344.38H122.81V349.13H132.28V359.49H137.48V373.69H141.23V430.16H149.79V427.29H169.16V378.47H175.29V371.61H193.68V376.82H212.67V379.52H218.54V387.04H222.63V390.27H225.79V407.08L236.97 411.86V417.99H246.46V456.47H259.68L261.99 458.77H263.64V400.69H266.01V396.86H274.19V393.02H288.05V391.09H295.82L298.98 394.26V395.84H311.1V414.14H335.53C351.33 407.42 370.37 403.5 390.86 403.5C418.02 403.5 442.63 410.39 460.53 421.55H462.96V389.31H473.05L483.83 391.98V394.95H485.41V398.02H488.18V375.47H489.98V369.93L491.65 371.6H496.19V369.93H519.23V376.36H521.81V398.11H532.09L543.51 409.54H557.71V420.27H559.49V365.48L575.94 381.93V403.5H579.86C583.56 333.93 585.537 264.993 585.79 196.69C581.28 196.27 577.35 195.61 575.44 194.11H574.26C572.83 191.64 573.22 189.3 575.71 187.13L572.54 183.57C572.862 181.246 572.747 178.882 572.2 176.6C572.069 175.98 572.158 175.333 572.452 174.771C572.746 174.209 573.226 173.767 573.81 173.52L574.85 173.08V172.79C574.849 172.187 575.088 171.608 575.513 171.18C575.939 170.753 576.517 170.512 577.12 170.51H577.16L578.74 168.07H577.95V163.06C580.51 162.71 583.13 162.51 585.79 162.4V156.86H585V150.43H587.77V97.92C585.91 96.52 584.91 95.06 585.27 93.5C585.495 92.7841 585.878 92.1277 586.391 91.5792C586.903 91.0306 587.531 90.6038 588.23 90.33V54.27L589.45 53.05L589.82 41.41L590.81 40.82L590.01 39.63L590.34 24.2L590.67 23.87V9.3L591.1 8.87V0H593.28V8.87L593.71 9.3V23.87L594.04 24.2L594.37 39.63L593.57 40.82L594.56 41.41L594.93 53.05L596.15 54.27V90.33C596.849 90.6038 597.478 91.0306 597.99 91.5792C598.502 92.1277 598.885 92.7841 599.11 93.5C599.47 95.06 598.47 96.52 596.61 97.92V150.43H599.38V156.86H598.59V162.4C601.25 162.51 603.87 162.71 606.43 163.06V168.07H605.64L607.22 170.51H607.26C607.863 170.512 608.441 170.753 608.867 171.18C609.292 171.608 609.531 172.187 609.53 172.79V173.08L610.57 173.52C611.154 173.767 611.634 174.209 611.928 174.771C612.222 175.333 612.311 175.98 612.18 176.6C611.634 178.882 611.518 181.246 611.84 183.57L608.67 187.13C611.16 189.3 611.55 191.64 610.12 194.11H608.94C607.03 195.61 603.09 196.27 598.59 196.69C598.76 264.96 600.737 333.897 604.52 403.5L604.88 409.29H614.08V387.73H617.44V385.06H632.67L646.52 398.91H661.29V376.95H666.96V374.97H671.24V373.19H677.77V368.31H687.86V363.37H706.85V381.9L713.97 374.77H724.65V366.66H735.13V328.09L750.17 313.06H776.48V357.76H788.34V343.72H796.26V340.36H807.73V286.95H811.49V281.41H838.78V287.15H841.16V289.13H843.33V334.03H848.28V327.1L858.27 337.09V340.29H864.56V256.39H868.06V254.31H890.21V257.49H894.56V368.11H900.43V321.83L908.94 313.32H963.73V337.39H967.02V340.16H977.31V316.16H981.13V309.04H986.81V262.03H988.32V254.91H989.81V249.66H1009.68L1017.06 257.04V264.2L1019.9 267.04V357.7H1023.46V367.06H1027.82V242.05H1037.08V238.09H1053.4L1060.12 244.82V249.37L1061.71 250.95V360.93H1084.26V363.9H1114.91V361.13H1124.21V363.5H1125.99V352.82H1135.88V334.03H1169.11V297.7H1192.65V268.95L1208.48 253.13H1237.49V316.69L1250.67 329.87V316.42H1254.37V312.47H1261.49V308.51H1272.3L1275.33 311.54H1282.59V305.87H1287.07V295.32H1291.29V284.51H1297.62V281.61L1299.25 279.98V262.82L1302.03 260.04L1304.94 262.95V280.03L1306.65 281.74V284.77H1313.24V286.62H1331.64L1339.19 294.17V349.37H1344.27V305.54H1349.21V262.52H1370.97L1385.66 277.21V308.81L1387.21 310.36V318.99L1391.16 322.94V330.17L1393.62 332.64V342.33H1410.13L1411.77 340.7H1424.67L1426.58 342.61H1431.99V373.52H1438.59V296.38H1447.68L1470.17 318.86V376.55H1474.45V381.17H1476.83V332.38L1479.33 329.87V320.51H1487.24L1496.34 329.61V372.2H1499.24V388.03H1501.75V393.83H1507.02V349.52L1510.51 346.03V334.75H1529.71V389.74H1532.34V393.83H1550.67V390.99H1554.23V356.97H1570.26V394.55H1574.61V428.18H1590.04V424.42H1593.99V405.83H1610.61V418.09H1616.15V402.66H1622.67V386.44H1631.97V428.18H1669.75V379.72H1674.5V372.86H1693.22V428.18H1701.4V434.05H1714.59V422.44H1745.97V431.41H1756.52V398.18H1769.97L1787.51 415.72V441.43H1808.74V364.69L1820.61 352.82H1829.05V406.88H1838.28V414H1858.59V398.97H1875.46V391.32H1880.21V383.15H1898.67V388.69H1905.27V412.69H1909.22L1914.89 418.36V421.13H1919.72Z"
        fill="#171C28"
      />
    </Art>
  );
};
export default City;
