angular.module('app.controller')
.factory('Project', function () {
    function Project(objectId,userId,styleName,styleAvatar,roomInfo,startDate,endDate,jzTeam,sjTeam,jlTeam) {
        this.objectId = objectId;
        this.userId = userId;
        this.styleName = styleName;
        this.styleAvatar = styleAvatar;
        this.roomInfo = roomInfo;
        this.startDate = startDate;
        this.endDate = endDate;
        this.jzTeam = jzTeam;
        this.sjTeam = sjTeam;
        this.jlTeam = jlTeam;
    };
    Project.prototype.toString = function(){
        return Project.name;
    };
    Project.prototype.setId = function(id){
        this.objectId = id;
    };
    /**
     * Static method, assigned to class
     * Instance ('this') is not available in static context
     */
    Project.build = function (data) {
        return new Project(
            data.objectId,
            data.userId,
            data.styleName,
            data.styleAvatar,
            data.roomInfo,
            data.startDate,
            data.endDate,
            data.jzTeam,
            data.sjTeam,
            data.jlTeam
        );
    };
    /**
     * Return the constructor function
     */
    return Project;
});
