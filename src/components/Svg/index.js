import React from "react";
import "./svg.css";

const Image = ({ moving }) => {
  return (
    <svg width="232" height="319" viewBox="0 0 232 319" fill="none">
      <path
        d="M7.50016 138.5C7.66682 153.833 7.70016 185 6.50016 187C5.00016 189.5 -1.99984 205 17.0002 208M16 147.5C17.1667 150.5 17.6 157.7 10 162.5C9 164.5 7.9 169.9 11.5 175.5L13.5 177C13.3333 179 13.3 183.1 14.5 183.5C16 184 16.5 184.5 17.5 183C18.5 181.5 17.0002 174.5 17.0002 173C17.0002 171.5 16 168.5 17.5 168.5C18.7 168.5 19.6667 168.5 20 168.5V166.5M15.5 193C16.8334 200 19.0003 216.1 17.0002 224.5C14.5 235 13.5 246 14.5 247.5M21 247.5C23 254.833 32.8 274.2 56 293M62 294.5C64.8333 294.5 72.6 297.5 81 309.5C91.5 324.5 128 316.5 131.5 314C134.333 312.667 140.5 309.3 142.5 306.5C145 303 146.5 298.5 155.5 297C162.7 295.8 170.167 286.833 173 282.5C175.667 277.167 181.3 264.9 182.5 258.5C184 250.5 188 231 191.5 228.5C193.833 223.667 198.9 213.7 200.5 212.5"
        stroke="black"
      />
      <path d="M107 197C106.333 197.5 103.9 198.5 99.5 198.5" stroke="black" />
      <path
        d="M82.8202 58.8834L81.3202 56.3834H80.8203C79.6203 58.3834 79.3203 60.2168 79.3203 60.8835V62.3835C79.8203 62.8835 80.8203 64.2835 80.8203 65.8835C80.8203 67.4835 81.1536 68.2168 81.3202 68.3835H82.8202L81.3202 70.3834C80.9201 72.3834 82.8202 74.5501 83.8202 75.3835L78.8203 78.3835L81.3202 81.3834L76.3203 85.8835C77.1536 86.0501 78.7203 86.4835 78.3203 86.8835C77.9203 87.2835 70.8203 93.0501 67.3203 95.8835C67.487 97.2168 67.8203 99.9835 67.8203 100.383C67.8203 100.783 62.487 106.217 59.8203 108.883C61.487 108.883 64.9203 108.983 65.3203 109.383C65.7203 109.783 64.1536 111.55 63.3203 112.383C66.5203 112.383 66.987 112.717 66.8203 112.883L57.8203 123.383V125.883L55.8203 128.383C55.8203 128.717 55.9203 129.383 56.3203 129.383C56.7203 129.383 57.487 130.05 57.8203 130.383L57.3203 133.883C58.3203 134.05 60.2203 134.583 59.8203 135.383C59.3203 136.383 46.3203 145.883 42.8203 147.383C40.0203 148.583 37.987 154.883 37.3203 157.883C37.6536 157.717 38.6203 157.583 39.8203 158.383C41.0203 159.183 34.987 168.05 31.8203 172.383L30.8203 184.883V197.883C29.2203 202.283 27.1536 203.05 26.3203 202.883C21.1203 200.883 21.487 196.717 22.3203 194.883L20.8203 194.383L21.3203 190.383C21.1536 190.55 20.6203 190.783 19.8203 190.383C19.0203 189.983 20.487 187.55 21.3203 186.383C20.5203 185.183 20.987 173.217 21.3203 167.383C14.9203 163.783 18.3203 158.883 20.8203 156.883C19.6536 157.05 17.2203 157.283 16.8203 156.883C16.3203 156.383 23.3203 152.383 22.3203 151.883C21.5203 151.483 21.987 148.383 22.3203 146.883H14.8203C13.3202 148.55 10.1202 151.683 9.32042 150.883C8.32076 149.883 10.3201 138.883 10.3201 137.383C10.3201 135.883 5.32031 134.883 3.82031 134.383C2.32031 133.883 7.32042 132.383 7.32042 131.383C7.32042 130.383 3.3203 131.883 1.3203 130.883C-0.679699 129.883 7.32042 125.883 7.8203 125.383C8.32018 124.883 6.32012 124.883 5.82012 124.383C5.32012 123.883 7.82042 118.883 8.32012 117.383C8.81982 115.883 7.82042 115.383 7.32042 114.383C6.92042 113.583 8.8202 112.383 9.82009 111.883C6.22009 108.283 8.65342 105.05 10.3201 103.883C9.98687 103.55 9.22042 102.883 8.82042 102.883C8.42042 102.883 9.65353 100.55 10.3201 99.3835C9.48687 99.5501 7.72042 99.6835 7.32042 98.8835C6.92042 98.0835 9.48709 94.5501 10.8204 92.8835C9.32042 92.8835 6.82042 92.6835 8.82042 91.8835C10.8204 91.0835 11.6538 88.5501 11.8204 87.3835C8.62041 85.7835 7.82042 84.0501 7.82042 83.3834C7.82042 82.7168 8.12042 81.1834 9.32042 80.3835C10.8204 79.3835 10.3204 73.3835 10.8204 71.8835C11.2204 70.6835 12.6538 69.7168 13.3204 69.3835C12.3204 64.3835 15.3204 61.8835 15.8204 61.3835C16.3204 60.8835 14.8204 57.3835 18.3204 56.8835C21.8204 56.3835 22.3204 48.8835 22.3204 48.3835C22.3204 47.8835 27.8204 43.3835 28.8204 42.3835C29.8204 41.3835 29.8204 36.8835 30.3204 35.8835C30.8204 34.8835 34.8204 34.3835 35.8204 31.3835C36.6204 28.9835 37.8204 28.3835 38.3204 28.3835H40.8204C42.4204 25.5835 48.1538 24.8835 50.8204 24.8835V23.3835H57.3204L60.8201 20.3835C59.2201 17.5835 61.8202 16.2168 63.3202 15.8835C59.7202 12.2835 73.1535 11.3835 80.3202 11.3835C81.4869 10.0501 84.0202 7.58345 84.8202 8.38345C85.6202 9.18345 89.8202 9.71678 91.8202 9.88344C93.4202 5.48343 99.4869 2.71677 102.32 1.88344C126.32 0.283443 136.32 1.21678 138.32 1.88344L141.82 3.88344L161.32 5.38344C164.654 6.71678 171.32 9.48344 171.32 9.88344C171.32 10.2834 170.987 10.3834 170.82 10.3834H168.82C167.22 10.3834 171.154 13.0501 173.32 14.3834C190.92 20.7834 203.654 33.7168 207.82 39.3834L209.32 39.8834L217.32 45.3834V49.8834C219.154 52.0501 222.82 56.5834 222.82 57.3834C222.82 58.1834 221.487 59.3834 220.82 59.8834C221.82 59.7168 224.02 59.9834 224.82 62.3834C225.62 64.7834 225.487 70.7168 225.32 73.3834C228.12 77.7834 230.154 86.5501 230.82 90.3834L227.32 93.8834C225.32 95.8834 230.82 94.8834 230.82 95.8834C230.82 96.8834 227.82 99.3834 227.32 100.383C226.92 101.183 228.487 101.383 229.32 101.383V111.383L226.32 110.883L225.32 114.383L227.32 118.383C228.487 119.217 230.52 121.183 229.32 122.383L227.32 124.383C227.32 127.983 228.32 134.217 228.82 136.883C229.32 137.717 230.12 139.483 229.32 139.883C228.52 140.283 226.32 143.717 225.32 145.383L227.32 149.383H225.32L227.32 153.383C226.487 153.883 224.62 154.883 223.82 154.883C222.82 154.883 219.82 167.883 219.32 167.883C218.82 167.883 215.82 170.883 215.32 173.383C214.82 175.883 211.82 177.883 210.82 178.883C209.82 179.883 209.32 191.883 209.32 192.383C209.32 192.883 199.32 212.383 199.82 211.383C200.32 210.383 204.82 193.383 204.32 187.383C203.92 182.583 203.487 176.717 203.32 174.383L204.82 173.383V161.383C207.62 154.583 205.32 135.55 203.82 126.883L201.32 124.383L199.82 124.883C190.62 115.283 171.654 110.883 163.32 109.883C162.52 112.683 164.987 114.05 166.32 114.383C157.92 115.583 147.82 111.883 143.82 109.883C143.42 112.283 147.654 115.217 149.82 116.383C147.32 115.717 141.52 113.783 138.32 111.383C134.32 108.383 136.32 105.883 135.82 102.383C135.42 99.5834 126.987 98.8834 122.82 98.8834L126.82 96.8834L121.32 95.8834L119.82 93.8834C116.62 92.6834 115.487 91.0501 115.32 90.3834L101.82 85.3834L100.82 83.3834H94.3202V81.3834H89.8202L87.8202 79.3834C88.1535 78.0501 88.6202 75.1834 87.8202 74.3834C87.0202 73.5834 86.8202 71.3834 86.8202 70.3834H84.8202V66.8834H82.8202L83.8202 64.3834L81.3202 61.3834L82.8202 58.8834Z"
        fill="black"
        stroke="black"
      />
      <path d="M172 214C173.667 214 177.3 213.6 178.5 212" stroke="black" />
      <path d="M148 191.5C148 199.167 152.1 214.4 168.5 214" stroke="black" />
      <path
        d="M158 200.5C159.5 201.667 162.9 204.1 164.5 204.5C166.1 204.9 170.5 204.667 172.5 204.5"
        stroke="black"
      />
      <path
        d="M175.5 187.852C175.833 190.018 175.9 194.652 173.5 195.852C171.1 197.052 166.833 196.352 165 195.852C164 195.185 161.9 193.452 161.5 191.852C161.1 190.252 161.333 188.501 161.5 187.826M161.5 187.826C158.01 188.493 155.038 189.463 153 190.352C154.333 192.185 158 196.452 162 198.852C167 201.852 174 200.852 177 199.852C179.4 199.052 185 194.185 187.5 191.852C179.263 186.36 169.14 186.366 161.5 187.826Z"
        stroke="black"
      />
      <path
        d="M165.5 187.352C165.333 188.852 166 191.852 168 191.852C170.5 191.852 171.5 188.852 171.5 187.352"
        stroke="black"
        strokeWidth="3"
      />
      <path
        d="M174.117 187.453C174.835 187.826 175.497 188.247 176.243 188.57C176.902 188.856 177.564 189.139 178.205 189.463C179.198 189.965 180.061 190.689 181.067 191.166C181.39 191.319 181.847 191.397 182.136 191.601C182.65 191.964 183.029 192.514 183.568 192.869C184.215 193.294 184.918 193.59 185.59 193.968C186.146 194.281 186.546 194.062 186.977 193.63C187.401 193.206 187.746 193.075 187.683 192.411C187.619 191.741 186.71 191.49 186.186 191.301C185.648 191.107 185.072 191.017 184.521 190.866C184.127 190.758 183.806 190.555 183.437 190.389C182.571 190 181.641 189.9 180.737 189.583C180.227 189.405 179.702 189.26 179.195 189.073C178.619 188.86 178.052 188.757 177.462 188.574C177.043 188.444 176.612 188.376 176.195 188.248C176.037 188.199 175.856 188.162 175.707 188.094C175.381 187.946 176.146 188.146 176.21 188.169C177.619 188.684 178.914 189.448 180.26 190.086C181.54 190.692 182.68 191.532 183.853 192.314C184.416 192.688 185.038 193.056 185.729 193.056C185.966 193.056 185.488 192.829 185.421 192.782C184.787 192.345 184.115 192.043 183.407 191.743C182.402 191.318 181.464 190.798 180.493 190.303C178.787 189.435 177.014 188.87 175.212 188.315C174.762 188.177 174.299 187.934 173.914 187.708C173.531 187.482 173.237 187.183 172.767 187.183"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M186.404 193.124C186.404 193.025 186.487 192.461 186.321 192.449C186.023 192.426 185.705 192.314 185.406 192.261C184.775 192.149 185.894 192.099 186.066 192.115C186.32 192.138 186.664 192.297 186.737 192.554C186.833 192.889 186.521 193.052 186.269 193.206C186.116 193.299 185.843 193.613 185.646 193.416C185.232 193.002 185.021 192.382 184.547 192.013C184.292 191.816 183.926 191.692 183.621 191.586C183.256 191.46 182.851 191.267 183.542 191.305C184.42 191.352 185.21 191.865 185.995 192.208C186.054 192.235 186.26 192.314 186.096 192.314C185.737 192.314 185.429 192.05 185.121 191.893C184.548 191.602 184.066 191.282 183.448 191.083C183.158 190.99 182.875 190.761 182.589 190.697C182.123 190.593 181.759 190.565 181.393 190.236C181.171 190.036 180.842 190.039 180.59 189.913C180.222 189.729 179.872 189.563 179.521 189.347C179.386 189.264 179.206 189.141 179.045 189.141"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M187.619 193.326C187.757 192.993 187.821 192.829 187.821 192.482C187.821 192.247 187.673 192.296 187.551 192.145C187.351 191.894 187.444 192.207 187.585 192.347C187.787 192.549 187.754 192.716 187.754 192.989C187.754 193.45 187.591 193.591 187.266 193.851C187.083 193.998 186.513 194.157 186.336 194.069"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M79 193.5C79.6667 195.5 83.9 199.5 95.5 199.5M113 196.5C109 203.167 95 213.3 71 200.5M58.5 174.5C60.6667 176 64.7 180.5 63.5 186.5C62.3 192.5 65.6667 195.667 67.5 196.5"
        stroke="black"
      />
      <path
        d="M90.4998 174C90.4998 174.5 89.4998 179 92.4998 179C95.4998 179 95.5 176 95.5 175"
        stroke="black"
        strokeWidth="3"
      />
      <path
        d="M86 173.699C82.2403 173.957 78.364 175.108 74.5 177.5L73.5 178L75 178.5C76.1667 182.5 81.6 190.8 94 192C99.6667 191.833 111.8 190.8 115 188C111.815 184.257 106.263 179.32 99.5 176.318M86 173.699C84.3333 177.633 83 185.6 91 186C99 186.4 100.333 180.167 100 177L99.5 176.318M86 173.699C88.3916 173.535 90.736 173.731 93 174.199M99.5 176.318C97.4352 175.401 95.2576 174.665 93 174.199M72 178C72.5 177 76 175.301 78.5 174.5C81 173.699 86 173 88.5 173.5C90.5 173.9 92.3333 174.133 93 174.199"
        stroke="black"
      />
      <path
        d="M110 235C110 234 118.5 234.2 120.5 239C119.833 239 118.2 239.1 117 239.5C115.8 239.9 110 239.5 110 239L109.5 238.5V237V236L110 235Z"
        fill="black"
      />
      <path
        d="M147 158V171.5M117.5 157.5C120.667 160.5 126.9 166.8 126.5 168C126.1 169.2 124.667 169.833 124 170M146.5 188L145.5 220M148 234C147 237.667 141.6 245.1 128 245.5C126.333 245.333 122.5 243.8 120.5 239M120.5 239C118.5 234.2 110 234 110 235L109.5 236V237V238.5L110 239C110 239.5 115.8 239.9 117 239.5C118.2 239.1 119.833 239 120.5 239ZM119 216.5L118.5 223C113.167 222 102.7 222.8 103.5 234C104.3 245.2 115.833 245.333 121.5 244M151.5 234C152.333 236.5 154.9 242 158.5 244M98 233C97.3333 234.833 95.7 238.6 94.5 239M120.5 210C122 204.667 124.4 191.9 122 183.5M118 147C128.167 144.167 151.7 141.1 164.5 151.5"
        stroke="black"
      />
      <path
        d="M137 246.5C136.2 246.5 134.667 245.833 134 245.5C131.167 246 125.3 246.9 124.5 246.5C123.5 246 119.5 244.5 118.5 245C117.7 245.4 114.167 244.833 112.5 244.5C110.667 244.167 106.9 243.6 106.5 244C106 244.5 100 247 97 247C94.6 247 92 248.333 91 249C87.4 249 84.8333 249.333 84 249.5C83 250.333 80.9 252 80.5 252C80 252 77.5 252.5 77.5 253C77.5 253.4 75.8333 254.833 74.9999 255.5C66.9999 258 66.4999 271 66.9999 272C67.3999 272.8 73.1666 271.667 75.9999 271C76.1666 271.333 76.5999 272.1 76.9999 272.5C77.3999 272.9 79.8333 271.333 80.9999 270.5C81.7999 271.7 82.9999 272.333 83.4999 272.5C84.9999 272.5 88.2999 272.3 89.4999 271.5C90.6999 270.7 91.3333 270.833 91.4999 271C91.6666 271.5 92.0999 272.6 92.4999 273C92.8999 273.4 94.3333 272.167 94.9999 271.5L96.4999 272C100.167 271.5 107.8 270.4 109 270C110.2 269.6 114.167 270.5 116 271C116.167 270.167 116.7 268.7 117.5 269.5C118.3 270.3 120.833 269.833 122 269.5L123 271.5L126.5 271C127.5 271.667 129.6 273.1 130 273.5C130.4 273.9 132.833 273.667 134 273.5C135 273.333 137.5 273.4 139.5 275C142 277 148 277.5 150.5 277C152.5 276.6 154 275.833 154.5 275.5C154.5 275.833 155 276.7 157 277.5C159 278.3 161.167 274.833 162 273C162.8 273.4 164 272.833 164.5 272.5C166 266.5 162.5 264.5 162 263C161.5 261.5 159.5 261.5 159 261.5C158.6 261.5 156.167 255.833 155 253C154 253 151.9 252.9 151.5 252.5C151 252 151 250.5 150.5 250C150 249.5 140 244 139 244C138 244 138 246.5 137 246.5Z"
        fill="black"
        stroke="black"
      />
      <path
        d="M99.4999 286C106.5 285.5 119.5 282.1 123.5 282.5C127.5 282.9 135.167 284.796 138.5 286.129H98.9999C98.9742 286.119 98.9484 286.111 98.9226 286.103C98.1278 286.217 98.5195 285.993 98.9226 286.103C99.071 286.082 99.2609 286.049 99.4999 286Z"
        fill="black"
      />
      <path
        d="M101 272C103.5 272.333 109 272.8 111 272M114.5 272C115.5 272.833 119.4 274.4 127 274M79.5 278C80 279.667 82.7 283.1 89.5 283.5M99.4999 286C106.5 285.5 119.5 282.1 123.5 282.5C127.5 282.9 135.167 284.796 138.5 286.129H98.9999C98.4999 285.933 97.8999 286.33 99.4999 286Z"
        stroke="black"
      />
      <path
        d="M121 170.5L129.5 177.5C130.3 181.9 122.5 183.333 118.5 183.5V181.5C116.667 181.667 112.7 181.9 111.5 181.5C110.3 181.1 110 179.667 110 179L111 177.5C108.2 175.9 103.833 174.5 102 174C101.5 172.5 99.3 169 94.5 167C89.7 165 83.1667 164.5 80.5 164.5C78.5 164.1 72 165.667 69 166.5V165L75.5 162.5C81.1 159.3 93.5 159.167 99 159.5L102 161C106.8 166.2 116.667 169.5 121 170.5Z"
        fill="black"
        stroke="black"
        className={`${!moving} left-eyebrow`}
      />
      <path
        d="M162 176.5C160.8 177.3 149.5 177.167 144 177C143.5 177 142.5 177.1 142.5 177.5C142.5 178 145 183.5 147.5 186C150 188.5 164 187 165.5 187C166.7 187 175.667 183.333 180 181.5H186L193 187H197C195.833 183.833 192.9 177.1 190.5 175.5C187.5 173.5 184 172 182.5 172C181 172 179.5 172.5 178.5 173C177.7 173.4 172.5 173.5 170 173.5C167.833 174.167 163.2 175.7 162 176.5Z"
        fill="black"
        stroke="black"
        className={`${moving} right-eyebrow`}
      />
    </svg>
  );
};

export default Image;
