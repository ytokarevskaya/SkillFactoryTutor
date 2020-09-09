let funcWithoutProto = function () {
    this.obj = Object.create(null);
};

funcWithoutProto();
console.log(obj);