"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.trustlySerializeData = function (data) {
    if (Object.prototype.toString.call(data) === '[object Object]') {
        let keys = Object.keys(data);
        let serializedData = '';
        keys.sort();
        for (let i = 0; i < keys.length; i++) {
            let k = keys[i];
            if (data[k] === null) {
                serializedData = serializedData + k;
            }
            else {
                serializedData =
                    serializedData + k + exports.trustlySerializeData(data[k]);
            }
        }
        return serializedData;
    }
    else {
        return data.toString();
    }
};
exports.serialize = function (method, uuid, data) {
    return method + uuid + exports.trustlySerializeData(data);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJ1c3RseVNlcmlhbGl6ZURhdGEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL3RydXN0bHlTZXJpYWxpemVEYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQWEsUUFBQSxvQkFBb0IsR0FBRyxVQUFVLElBQUk7SUFDOUMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLGlCQUFpQixDQUFDLENBQUMsQ0FBQztRQUM3RCxJQUFJLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQzVCLElBQUksY0FBYyxHQUFHLEVBQUUsQ0FBQTtRQUN2QixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUE7UUFFWCxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUNuQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFFZixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDbkIsY0FBYyxHQUFHLGNBQWMsR0FBRyxDQUFDLENBQUE7WUFDdkMsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNKLGNBQWM7b0JBQ1YsY0FBYyxHQUFHLENBQUMsR0FBRyw0QkFBb0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtZQUMxRCxDQUFDO1FBQ0wsQ0FBQztRQUNELE1BQU0sQ0FBQyxjQUFjLENBQUE7SUFDekIsQ0FBQztJQUFDLElBQUksQ0FBQyxDQUFDO1FBQ0osTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQTtJQUMxQixDQUFDO0FBQ0wsQ0FBQyxDQUFBO0FBRVksUUFBQSxTQUFTLEdBQUcsVUFBVSxNQUFNLEVBQUUsSUFBSSxFQUFFLElBQUk7SUFDakQsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLEdBQUcsNEJBQW9CLENBQUMsSUFBSSxDQUFDLENBQUE7QUFDckQsQ0FBQyxDQUFBIn0=