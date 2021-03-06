// 给定三个字符串 s1, s2, s3, 验证 s3 是否是由 s1 和 s2 交错组成的。

// 示例 1:

// 输入: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac"
// 输出: true
// 示例 2:

// 输入: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbbaccc"
// 输出: false

var isInterleave = function (s1, s2, s3) {
    if (s1.length + s2.length !== s3.length)
        return false;
    var dp = new Array(s1.length + 1).fill(0).map(function (a) {
        return new Array(s2.length + 1).fill(false);
    });//dp[i][j]表示s1前i项(不包括i)以及s2的前j项可以由s3前i+j项组成
    console.dir(dp);
    dp[0][0] = true;
    for (var i = 0; i <= s1.length; i++) {
        for (var j = 0; j <= s2.length; j++) {
            if (i - 1 >= 0 && dp[i - 1][j] && (s1[i - 1] === s3[i + j - 1]))
                dp[i][j] = true;
            if (j - 1 >= 0 && dp[i][j - 1] && (s2[j - 1] === s3[i + j - 1]))
                dp[i][j] = true;
        }
    }
    return dp[s1.length][s2.length];
};