
/**
 * 座標を管理するためのクラス
 */
class Position {
  /**
   * @constructor
   * @param {number} x - X座標
   * @param {number} y - Y座標
   */
  constructor(x, y){
    /**
     * X座標
     * @type {number}
     */
    this.x = x;
    /**
     * Y座標
     * @type {number}
     */
    this.y = y;
  }

  /**
   * 値を更新する
   * @param {number} [x] - 設定するX座標
   * @param {number} [y] - 設定するY座標
   */
  set(x, y){
    if(x != null){this.x = x;}
    if(y != null){this.y = y;}
  }
}

/**
 * キャラクター管理のための基幹クラス
 */
class Character {
  /**
   * @constructor
   * @param {CanvasRenderingContext2D} ctx - 描画などに利用する 2D コンテキスト
   * @param {number} x - X座標
   * @param {number} y - Y座標
   * @param {number} life - キャラクターのライフ（生存フラグを兼ねる）
   * @param {Image} image - キャラクターの画像
   */
  constructor(ctx, x, y, life, image){
    /**
     * @type {CanvasRenderingContext2D}
     */
    this.ctx = ctx;
    /**
     * @type {Position}
     */
    this.position = new Position(x, y);
    /**
     * @type {number}
     */
    this.life = life;
    /**
     * @type {Image}
     */
    this.image = image;
  }

  /**
   * キャラクターを描画する
   */
  draw(){
    this.ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y
    );
  }
}

/**
 * viper クラス
 */
class Viper extends Character {
  /**
   * @constructor
   * @param {CanvasRenderingContext2D} ctx - 描画などに利用する 2D コンテキスト
   * @param {number} x - X座標
   * @param {number} y - Y座標
   * @param {Image} image - キャラクターの画像
   */
  constructor(ctx, x, y, image){
    // Charactor クラスを継承しているので、まずは継承元となる
    // Charactor クラスのコンストラクタを呼び出すことで初期化する
    //  (super が継承元のコンストラクタの呼び出しに相当する)
    super(ctx, x, y, 0, image);

    /**
     * viper が登場中かどうかを表すフラグ
     * @type {boolean}
     */
    this.isComing = false;
    /**
     * 登場演出を開始した際のタイムスタンプ
     * @type {number}
     */
    this.comingStart = null;
    /**
     * 登場演出を完了とする座標
     * @type {Position}
     */
    this.comingEndPosition = null;
  }
}