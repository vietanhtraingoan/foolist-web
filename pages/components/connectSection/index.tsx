import RightOutlined from "@ant-design/icons";
import React from "react";
import LanguageChange from "../languageChange";

const classNamePrefix = "connect-section";

const ConnectSection = () => {
  return (
    <div className={classNamePrefix}>
      <div>
        <div>
          KẾT NỐI VỚI <span>FOOLIST </span> ĐỂ TẠO NÊN BẢN SẮC CỦA RIÊNG BẠN
        </div>

        <div>
          <div></div>
          <div>
            <RightOutlined />
          </div>
        </div>
      </div>

      <div>
        <div>
          <div>
            <span>Đăng kí nhận thông tin</span>
            <input type="text" id="" />
          </div>

          <div>
            <span>Khám phá</span>
            <div>
              <div></div>
            </div>
          </div>

          <LanguageChange />
        </div>

        <div>
          <span>Dịch vụ</span>

          <div></div>
        </div>
      </div>
    </div>
  );
};

export default ConnectSection;
