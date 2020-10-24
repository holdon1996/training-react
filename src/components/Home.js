import React from 'react';

export default function Home() {
  return (
    <div className="wrap-container">
      <div className="sidebar-left">
        <div className="sidebar-top">
          <div className="account-info">
            <a className="avatar"><img src="./content/images/ic-avatar.svg" alt="" /></a>
            <div className="info">
              <span className="name">山田 太郎</span>
              <span className="if">SOFTBRAIN Co.,Ltd.</span>
              <a className="icon-down"><i className="far fa-angle-down" /></a>
            </div>
            <a className="icon-bell"><img src="./content/images/ic-bell.svg" alt="" /></a>
          </div>
          <a className="sedebar-search"><i className="far fa-search" />全体検索</a>
        </div>
        <div className="sidebar-menu-outer">
          <div className="sidebar-menu-inner">
            <ul className="sidebar-menu scrollbar">
              <li>
                <a><span className="icon"><img src="./content/images/ic-sidebar-dashboard.svg" alt="" /></span><span className="text">ダッシュボード</span></a>
              </li>
              <li>
                <a><span className="icon"><img src="./content/images/ic-sidebar-calendar.svg" alt="" /></span><span className="text">カレンダー</span></a>
              </li>
              <li>
                <a><span className="icon"><img src="./content/images/ic-sidebar-timeline.svg" alt="" /></span><span className="text">タイムライン</span></a>
              </li>
              <li>
                <a><span className="icon"><img src="./content/images/ic-sidebar-business-card.svg" alt="" /></span><span className="text">名刺</span></a>
              </li>
              <li className="active">
                <a><span className="icon"><img src="./content/images/ic-sidebar-client.svg" alt="" /></span><span className="text">顧客</span></a>
              </li>
              <li>
                <a><span className="icon"><img src="./content/images/ic-sidebar-activity.svg" alt="" /></span><span className="text">活動</span></a>
              </li>
              <li>
                <a><span className="icon"><img src="./content/images/ic-sidebar-prospect.svg" alt="" /></span><span className="text">見込み顧客</span></a>
              </li>
              <li>
                <a><span className="icon"><img src="./content/images/ic-sidebar-employee.svg" alt="" /></span><span className="text">社員</span></a>
              </li>
              <li>
                <a><span className="icon"><img src="./content/images/ic-sidebar-file.svg" alt="" /></span><span className="text">ファイルストレージ</span></a>
              </li>
              <li>
                <a><span className="icon"><img src="./content/images/ic-sidebar-analysis.svg" alt="" /></span><span className="text">分析</span></a>
              </li>
              <li>
                <a><span className="icon"><img src="./content/images/ic-sidebar-work-flow.svg" alt="" /></span><span className="text">ワークフロー</span></a>
              </li>
              <li>
                <a><span className="icon"><img src="./content/images/ic-sidebar-work.svg" alt="" /></span><span className="text">出退勤</span></a>
              </li>
              <li>
                <a><span className="icon"><img src="./content/images/ic-sidebar-email.svg" alt="" /></span><span className="text">メール</span></a>
              </li>
              <li>
                <a><span className="icon"><img src="./content/images/ic-sidebar-product.svg" alt="" /></span><span className="text">商品</span></a>
              </li>
              <li className="last">
              </li>
            </ul>
          </div>
        </div>
        <div className="sidebar-control">
          <ul className="sidebar-control-list">
            <li><a><img src="./content/images/ic-new-user.svg" alt="" />初心者の方</a></li>
            <li><a><img src="./content/images/ic-feedback.svg" alt="" />フィードバック</a></li>
          </ul>
          <a className="sidebar-control-list-expand" />
          <a href="" className="expand"><i className="far fa-angle-left" /></a>
        </div>
      </div>
      <div className="control-esr page-employee">
        <div className="control-top">
          <div className="left">
            <div className="button-shadow-add-select-wrap">
              <a className="button-shadow-add-select">顧客の登録</a>
              <span className="button-arrow" />
            </div>
          </div>
          <div className="right">
            <a className="icon-primary icon-switch-display" />
            <a className="icon-primary icon-map ml-2" />
            <div className="search-box-button-style">
              <button className="icon-search"><i className="far fa-search" /></button>
              <input type="text" placeholder="顧客を検索" />
              <button className="icon-fil" />
            </div>
            <a className="button-primary button-simple-edit ml-2">簡易編集</a>
            <a className="icon-small-primary icon-help-small" />
            <a className="icon-small-primary icon-setting-small" />
          </div>
        </div>
        <div className="wrap-control-esr style-3">
          <div className="esr-content">
            <div className="esr-content-sidebar">
              <div className="title-lf active">
                <a>担当顧客</a>
              </div>
              <div className="esr-content-sidebar-outer">
                <div className="esr-content-sidebar-inner">
                  <div className="list-group">
                    <a>全ての顧客</a>
                  </div>
                  <div className="list-group">
                    <div className=" link-has-icon"><a className="group-title">マイリスト</a><span className="plus-blue" /></div>
                    <ul>
                      <li>
                        <a>マイリストA</a>
                      </li>
                      <li>
                        <a href="">マイリストB</a><span className="icon-submenu" />
                      </li>
                    </ul>
                  </div>
                  <div className="list-group">
                    <div className=" link-has-icon"><a className="group-title">共有リスト</a><span className="plus-blue" /></div>
                    <ul>
                      <li>
                        <a>共有リストA</a><span className="icon-submenu" />
                      </li>
                      <li>
                        <a>共有リストB</a><span className="icon-submenu" />
                      </li>
                      <li>
                        <a>共有リストC</a>
                      </li>
                      <li><a>共有リストD</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="esr-content-body">
              <div className="esr-content-body-main">
                <div className="pagination-top">
                  <div className="esr-pagination">
                    <div className="select-option">
                      <a className="button-pull-down-small">30 件表示</a>
                    </div>
                    <span className="text">1-30件 / 60件</span>
                    <a><i className="icon-next fas fa-angle-left" /></a>
                    <a><i className="icon-prev far fa-angle-right" /></a>
                  </div>
                </div>
                <div className="table-list-wrap style-3">
                  <table className="table-list table-customer">
                    <thead>
                      <tr>
                        <th>
                          <label className="icon-check">
                            <input type="checkbox" name="" /><i />
                          </label>
                          <img className="icon-down" src="./content/images/ic-down.svg" alt="" />
                        </th>
                        <th>顧客名<a className="icon-small-primary icon-descent-small" /></th>
                        <th>登録日</th>
                        <th>業種</th>
                        <th>住所</th>
                        <th>電話番号</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <label className="icon-check">
                            <input type="checkbox" name="" /><i />
                          </label>
                        </td>
                        <td><a><p>顧客A</p></a></td>
                        <td><p>2019/07/02</p></td>
                        <td><p>農業・林業</p></td>
                        <td><a><p>〒000-0000 東京都新宿区河田町2-1 〇〇ビル4F</p></a></td>
                        <td><p>03-9678-4748</p></td>
                      </tr>
                      <tr>
                        <td>
                          <label className="icon-check">
                            <input type="checkbox" name="" /><i />
                          </label>
                        </td>
                        <td><a><p>顧客B</p></a></td>
                        <td><p>2019/07/02</p></td>
                        <td><p>農業・林業</p></td>
                        <td><a><p>〒000-0000 東京都新宿区河田町2-1 〇〇ビル4F</p></a></td>
                        <td><p>03-9678-4748</p></td>
                      </tr>
                      <tr>
                        <td>
                          <label className="icon-check">
                            <input type="checkbox" name="" /><i />
                          </label>
                        </td>
                        <td><a><p>顧客B</p></a></td>
                        <td><p>2019/07/02</p></td>
                        <td><p>農業・林業</p></td>
                        <td><a><p>〒000-0000 東京都新宿区河田町2-1 〇〇ビル4F</p></a></td>
                        <td><p>03-9678-4748</p></td>
                      </tr>
                      <tr>
                        <td>
                          <label className="icon-check">
                            <input type="checkbox" name="" /><i />
                          </label>
                        </td>
                        <td><a><p>顧客B</p></a></td>
                        <td><p>2019/07/02</p></td>
                        <td><p>農業・林業</p></td>
                        <td><a><p>〒000-0000 東京都新宿区河田町2-1 〇〇ビル4F</p></a></td>
                        <td><p>03-9678-4748</p></td>
                      </tr>
                      <tr>
                        <td>
                          <label className="icon-check">
                            <input type="checkbox" name="" /><i />
                          </label>
                        </td>
                        <td><a><p>顧客B</p></a></td>
                        <td><p>2019/07/02</p></td>
                        <td><p>農業・林業</p></td>
                        <td><a><p>〒000-0000 東京都新宿区河田町2-1 〇〇ビル4F</p></a></td>
                        <td><p>03-9678-4748</p></td>
                      </tr>
                      <tr>
                        <td>
                          <label className="icon-check">
                            <input type="checkbox" name="" /><i />
                          </label>
                        </td>
                        <td><a><p>顧客B</p></a></td>
                        <td><p>2019/07/02</p></td>
                        <td><p>農業・林業</p></td>
                        <td><a><p>〒000-0000 東京都新宿区河田町2-1 〇〇ビル4F</p></a></td>
                        <td><p>03-9678-4748</p></td>
                      </tr>
                      <tr>
                        <td>
                          <label className="icon-check">
                            <input type="checkbox" name="" /><i />
                          </label>
                        </td>
                        <td><a><p>顧客B</p></a></td>
                        <td><p>2019/07/02</p></td>
                        <td><p>農業・林業</p></td>
                        <td><a><p>〒000-0000 東京都新宿区河田町2-1 〇〇ビル4F</p></a></td>
                        <td><p>03-9678-4748</p></td>
                      </tr>
                      <tr>
                        <td>
                          <label className="icon-check">
                            <input type="checkbox" name="" /><i />
                          </label>
                        </td>
                        <td><a><p>顧客B</p></a></td>
                        <td><p>2019/07/02</p></td>
                        <td><p>農業・林業</p></td>
                        <td><a><p>〒000-0000 東京都新宿区河田町2-1 〇〇ビル4F</p></a></td>
                        <td><p>03-9678-4748</p></td>
                      </tr>
                      <tr>
                        <td>
                          <label className="icon-check">
                            <input type="checkbox" name="" /><i />
                          </label>
                        </td>
                        <td><a><p>顧客B</p></a></td>
                        <td><p>2019/07/02</p></td>
                        <td><p>農業・林業</p></td>
                        <td><a><p>〒000-0000 東京都新宿区河田町2-1 〇〇ビル4F</p></a></td>
                        <td><p>03-9678-4748</p></td>
                      </tr>
                      <tr>
                        <td>
                          <label className="icon-check">
                            <input type="checkbox" name="" /><i />
                          </label>
                        </td>
                        <td><a><p>顧客B</p></a></td>
                        <td><p>2019/07/02</p></td>
                        <td><p>農業・林業</p></td>
                        <td><a><p>〒000-0000 東京都新宿区河田町2-1 〇〇ビル4F</p></a></td>
                        <td><p>03-9678-4748</p></td>
                      </tr>
                      <tr>
                        <td>
                          <label className="icon-check">
                            <input type="checkbox" name="" /><i />
                          </label>
                        </td>
                        <td><a><p>顧客B</p></a></td>
                        <td><p>2019/07/02</p></td>
                        <td><p>農業・林業</p></td>
                        <td><a><p>〒000-0000 東京都新宿区河田町2-1 〇〇ビル4F</p></a></td>
                        <td><p>03-9678-4748</p></td>
                      </tr>
                      <tr>
                        <td>
                          <label className="icon-check">
                            <input type="checkbox" name="" /><i />
                          </label>
                        </td>
                        <td><a><p>顧客B</p></a></td>
                        <td><p>2019/07/02</p></td>
                        <td><p>農業・林業</p></td>
                        <td><a><p>〒000-0000 東京都新宿区河田町2-1 〇〇ビル4F</p></a></td>
                        <td><p>03-9678-4748</p></td>
                      </tr>
                      <tr>
                        <td>
                          <label className="icon-check">
                            <input type="checkbox" name="" /><i />
                          </label>
                        </td>
                        <td><a><p>顧客B</p></a></td>
                        <td><p>2019/07/02</p></td>
                        <td><p>農業・林業</p></td>
                        <td><a><p>〒000-0000 東京都新宿区河田町2-1 〇〇ビル4F</p></a></td>
                        <td><p>03-9678-4748</p></td>
                      </tr>
                      <tr>
                        <td>
                          <label className="icon-check">
                            <input type="checkbox" name="" /><i />
                          </label>
                        </td>
                        <td><a><p>顧客B</p></a></td>
                        <td><p>2019/07/02</p></td>
                        <td><p>農業・林業</p></td>
                        <td><a><p>〒000-0000 東京都新宿区河田町2-1 〇〇ビル4F</p></a></td>
                        <td><p>03-9678-4748</p></td>
                      </tr>
                      <tr>
                        <td>
                          <label className="icon-check">
                            <input type="checkbox" name="" /><i />
                          </label>
                        </td>
                        <td><a><p>顧客B</p></a></td>
                        <td><p>2019/07/02</p></td>
                        <td><p>農業・林業</p></td>
                        <td><a><p>〒000-0000 東京都新宿区河田町2-1 〇〇ビル4F</p></a></td>
                        <td><p>03-9678-4748</p></td>
                      </tr>
                      <tr>
                        <td>
                          <label className="icon-check">
                            <input type="checkbox" name="" /><i />
                          </label>
                        </td>
                        <td><a><p>顧客B</p></a></td>
                        <td><p>2019/07/02</p></td>
                        <td><p>農業・林業</p></td>
                        <td><a><p>〒000-0000 東京都新宿区河田町2-1 〇〇ビル4F</p></a></td>
                        <td><p>03-9678-4748</p></td>
                      </tr>
                      <tr>
                        <td>
                          <label className="icon-check">
                            <input type="checkbox" name="" /><i />
                          </label>
                        </td>
                        <td><a><p>顧客B</p></a></td>
                        <td><p>2019/07/02</p></td>
                        <td><p>農業・林業</p></td>
                        <td><a><p>〒000-0000 東京都新宿区河田町2-1 〇〇ビル4F</p></a></td>
                        <td><p>03-9678-4748</p></td>
                      </tr>
                      <tr>
                        <td>
                          <label className="icon-check">
                            <input type="checkbox" name="" /><i />
                          </label>
                        </td>
                        <td><a><p>顧客B</p></a></td>
                        <td><p>2019/07/02</p></td>
                        <td><p>農業・林業</p></td>
                        <td><a><p>〒000-0000 東京都新宿区河田町2-1 〇〇ビル4F</p></a></td>
                        <td><p>03-9678-4748</p></td>
                      </tr>
                      <tr>
                        <td>
                          <label className="icon-check">
                            <input type="checkbox" name="" /><i />
                          </label>
                        </td>
                        <td><a><p>顧客B</p></a></td>
                        <td><p>2019/07/02</p></td>
                        <td><p>農業・林業</p></td>
                        <td><a><p>〒000-0000 東京都新宿区河田町2-1 〇〇ビル4F</p></a></td>
                        <td><p>03-9678-4748</p></td>
                      </tr>
                      <tr>
                        <td>
                          <label className="icon-check">
                            <input type="checkbox" name="" /><i />
                          </label>
                        </td>
                        <td><a><p>顧客B</p></a></td>
                        <td><p>2019/07/02</p></td>
                        <td><p>農業・林業</p></td>
                        <td><a><p>〒000-0000 東京都新宿区河田町2-1 〇〇ビル4F</p></a></td>
                        <td><p>03-9678-4748</p></td>
                      </tr>
                      <tr>
                        <td>
                          <label className="icon-check">
                            <input type="checkbox" name="" /><i />
                          </label>
                        </td>
                        <td><a><p>顧客B</p></a></td>
                        <td><p>2019/07/02</p></td>
                        <td><p>農業・林業</p></td>
                        <td><a><p>〒000-0000 東京都新宿区河田町2-1 〇〇ビル4F</p></a></td>
                        <td><p>03-9678-4748</p></td>
                      </tr>
                      <tr>
                        <td>
                          <label className="icon-check">
                            <input type="checkbox" name="" /><i />
                          </label>
                        </td>
                        <td><a><p>顧客B</p></a></td>
                        <td><p>2019/07/02</p></td>
                        <td><p>農業・林業</p></td>
                        <td><a><p>〒000-0000 東京都新宿区河田町2-1 〇〇ビル4F</p></a></td>
                        <td><p>03-9678-4748</p></td>
                      </tr>
                      <tr>
                        <td>
                          <label className="icon-check">
                            <input type="checkbox" name="" /><i />
                          </label>
                        </td>
                        <td><a><p>顧客B</p></a></td>
                        <td><p>2019/07/02</p></td>
                        <td><p>農業・林業</p></td>
                        <td><a><p>〒000-0000 東京都新宿区河田町2-1 〇〇ビル4F</p></a></td>
                        <td><p>03-9678-4748</p></td>
                      </tr>
                      <tr>
                        <td>
                          <label className="icon-check">
                            <input type="checkbox" name="" /><i />
                          </label>
                        </td>
                        <td><a><p>顧客B</p></a></td>
                        <td><p>2019/07/02</p></td>
                        <td><p>農業・林業</p></td>
                        <td><a><p>〒000-0000 東京都新宿区河田町2-1 〇〇ビル4F</p></a></td>
                        <td><p>03-9678-4748</p></td>
                      </tr>
                      <tr>
                        <td>
                          <label className="icon-check">
                            <input type="checkbox" name="" /><i />
                          </label>
                        </td>
                        <td><a><p>顧客B</p></a></td>
                        <td><p>2019/07/02</p></td>
                        <td><p>農業・林業</p></td>
                        <td><a><p>〒000-0000 東京都新宿区河田町2-1 〇〇ビル4F</p></a></td>
                        <td><p>03-9678-4748</p></td>
                      </tr>
                      <tr>
                        <td>
                          <label className="icon-check">
                            <input type="checkbox" name="" /><i />
                          </label>
                        </td>
                        <td><a><p>顧客B</p></a></td>
                        <td><p>2019/07/02</p></td>
                        <td><p>農業・林業</p></td>
                        <td><a><p>〒000-0000 東京都新宿区河田町2-1 〇〇ビル4F</p></a></td>
                        <td><p>03-9678-4748</p></td>
                      </tr>
                      <tr>
                        <td>
                          <label className="icon-check">
                            <input type="checkbox" name="" /><i />
                          </label>
                        </td>
                        <td><a><p>顧客B</p></a></td>
                        <td><p>2019/07/02</p></td>
                        <td><p>農業・林業</p></td>
                        <td><a><p>〒000-0000 東京都新宿区河田町2-1 〇〇ビル4F</p></a></td>
                        <td><p>03-9678-4748</p></td>
                      </tr>
                      <tr>
                        <td>
                          <label className="icon-check">
                            <input type="checkbox" name="" /><i />
                          </label>
                        </td>
                        <td><a><p>顧客B</p></a></td>
                        <td><p>2019/07/02</p></td>
                        <td><p>農業・林業</p></td>
                        <td><a><p>〒000-0000 東京都新宿区河田町2-1 〇〇ビル4F</p></a></td>
                        <td><p>03-9678-4748</p></td>
                      </tr>
                      <tr>
                        <td>
                          <label className="icon-check">
                            <input type="checkbox" name="" /><i />
                          </label>
                        </td>
                        <td><a><p>顧客B</p></a></td>
                        <td><p>2019/07/02</p></td>
                        <td><p>農業・林業</p></td>
                        <td><a><p>〒000-0000 東京都新宿区河田町2-1 〇〇ビル4F</p></a></td>
                        <td><p>03-9678-4748</p></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="control-right">
          <ul>
            <li><a className="button-popup button-right-note"><img src="./content/images/ic-right-note.svg" alt="" /></a></li>
            <li><a className="button-popup button-right-list"><img src="./content/images/ic-right-list.svg" alt="" /></a></li>
          </ul>
          <a href="" className="expand-control-right"><i className="far fa-angle-right" /></a>
        </div>
      </div>
    </div>
  );
}
