AR = 'arm-none-eabi-ar'
ARFLAGS = 'rcs'
AS = 'arm-none-eabi-gcc'
BINDIR = '/usr/local/bin'
BLOCK_MESSAGE_KEYS = []
BUILD_DIR = 'emery'
BUILD_TYPE = 'app'
BUNDLE_BIN_DIR = 'emery'
BUNDLE_NAME = 'workmate.pbw'
CC = ['arm-none-eabi-gcc']
CCLNK_SRC_F = []
CCLNK_TGT_F = ['-o']
CC_NAME = 'gcc'
CC_SRC_F = []
CC_TGT_F = ['-c', '-o']
CC_VERSION = ('7', '4', '1')
CFLAGS = ['-mcpu=cortex-m3', '-mthumb', '-ffunction-sections', '-fdata-sections', '-g', '-fPIE', '-Os', '-D_TIME_H_', '-Wall', '-Wextra', '-Werror', '-Wno-unused-parameter', '-Wno-error=unused-function', '-Wno-error=unused-variable', '-std=c11', '-fms-extensions', '-Wno-address', '-Wno-type-limits', '-Wno-missing-field-initializers']
CFLAGS_MACBUNDLE = ['-fPIC']
CFLAGS_cshlib = ['-fPIC']
CPPPATH_ST = '-I%s'
DEFINES = ['RELEASE', 'PBL_PLATFORM_EMERY', 'PBL_COLOR', 'PBL_RECT', 'PBL_MICROPHONE', 'PBL_SMARTSTRAP', 'PBL_HEALTH', 'PBL_SMARTSTRAP_POWER', 'PBL_COMPASS', 'PBL_DISPLAY_WIDTH=200', 'PBL_DISPLAY_HEIGHT=228', 'PBL_SDK_3']
DEFINES_ST = '-D%s'
DEST_BINFMT = 'elf'
DEST_CPU = 'arm'
DEST_OS = 'linux'
INCLUDES = ['emery']
LD = 'arm-none-eabi-ld'
LIBDIR = '/usr/local/lib'
LIBPATH_ST = '-L%s'
LIB_DIR = 'node_modules'
LIB_ST = '-l%s'
LINKFLAGS = ['-mcpu=cortex-m3', '-mthumb', '-Wl,--gc-sections', '-Wl,--warn-common', '-fPIE', '-Os']
LINKFLAGS_MACBUNDLE = ['-bundle', '-undefined', 'dynamic_lookup']
LINKFLAGS_cshlib = ['-shared']
LINKFLAGS_cstlib = ['-Wl,-Bstatic']
LINK_CC = ['arm-none-eabi-gcc']
MESSAGE_KEYS = {}
MESSAGE_KEYS_HEADER = '/home/gfunkmonk/tmp/workmate/build/include/message_keys.auto.h'
NODE_PATH = '/home/gfunkmonk/.pebble-sdk/SDKs/current/node_modules'
PEBBLE_SDK_COMMON = '/home/gfunkmonk/.pebble-sdk/SDKs/current/sdk-core/pebble/common'
PEBBLE_SDK_PLATFORM = '/home/gfunkmonk/.pebble-sdk/SDKs/current/sdk-core/pebble/emery'
PEBBLE_SDK_ROOT = '/home/gfunkmonk/.pebble-sdk/SDKs/current/sdk-core/pebble'
PLATFORM = {'TAGS': ['emery', 'color', 'rect', 'mic', 'strap', 'health', 'strappower', 'compass', '200w', '228h'], 'MAX_FONT_GLYPH_SIZE': 320, 'ADDITIONAL_TEXT_LINES_FOR_PEBBLE_H': [], 'MAX_APP_BINARY_SIZE': 131072, 'MAX_RESOURCES_SIZE': 1048576, 'MAX_APP_MEMORY_SIZE': 131072, 'MAX_WORKER_MEMORY_SIZE': 10240, 'NAME': 'emery', 'BUNDLE_BIN_DIR': 'emery', 'BUILD_DIR': 'emery', 'MAX_RESOURCES_SIZE_APPSTORE': 262144, 'DEFINES': ['PBL_PLATFORM_EMERY', 'PBL_COLOR', 'PBL_RECT', 'PBL_MICROPHONE', 'PBL_SMARTSTRAP', 'PBL_HEALTH', 'PBL_SMARTSTRAP_POWER', 'PBL_COMPASS', 'PBL_DISPLAY_WIDTH=200', 'PBL_DISPLAY_HEIGHT=228']}
PLATFORM_NAME = 'emery'
PREFIX = '/usr/local'
PROJECT_INFO = {u'sdkVersion': u'3', u'uuid': u'd40e830b-84cc-4a2e-b673-178762b1bc57', u'appKeys': {}, u'companyName': u'Keanu Lee', 'messageKeys': {}, u'versionLabel': u'1.1', u'capabilities': [u'configurable'], u'longName': u'Workmate', u'versionCode': 1, u'shortName': u'Workmate', u'watchapp': {u'watchface': False}, u'resources': {u'media': [{u'type': u'png', u'name': u'IMAGE_MENU_ICON', u'file': u'images/menu_icon.png'}, {u'type': u'png', u'name': u'IMAGE_LOGO_SPLASH', u'file': u'images/logo_splash.png'}, {u'type': u'png', u'name': u'IMAGE_TILE_SPLASH', u'file': u'images/tile_splash.png'}, {u'type': u'font', u'name': u'MONO_FONT_14', u'file': u'fonts/UbuntuMono-Regular.ttf'}, {u'type': u'png', u'name': u'IMAGES_UNCHECK_PNG', u'file': u'images/uncheck.png'}, {u'menuIcon': True, u'type': u'png', u'name': u'IMAGES_CHECK_PNG', u'file': u'images/check.png'}, {u'type': u'png', u'name': u'IMAGES_WARNING_PNG', u'file': u'images/warning.png'}, {u'type': u'png', u'name': u'IMAGES_REFRESH_PNG', u'file': u'images/refresh.png'}, {u'type': u'png', u'name': u'IMAGES_CALENDAR_PNG', u'file': u'images/calendar.png'}, {u'type': u'png', u'name': u'IMAGES_ENVELOPE_PNG', u'file': u'images/envelope.png'}, {u'type': u'png', u'name': u'IMAGES_PUSHPIN_PNG', u'file': u'images/pushpin.png'}, {u'type': u'png', u'name': u'IMAGES_REMOVE_PNG', u'file': u'images/remove.png'}]}}
REQUESTED_PLATFORMS = []
RESOURCES_JSON = [{u'type': u'png', u'name': u'IMAGE_MENU_ICON', u'file': u'images/menu_icon.png'}, {u'type': u'png', u'name': u'IMAGE_LOGO_SPLASH', u'file': u'images/logo_splash.png'}, {u'type': u'png', u'name': u'IMAGE_TILE_SPLASH', u'file': u'images/tile_splash.png'}, {u'type': u'font', u'name': u'MONO_FONT_14', u'file': u'fonts/UbuntuMono-Regular.ttf'}, {u'type': u'png', u'name': u'IMAGES_UNCHECK_PNG', u'file': u'images/uncheck.png'}, {u'menuIcon': True, u'type': u'png', u'name': u'IMAGES_CHECK_PNG', u'file': u'images/check.png'}, {u'type': u'png', u'name': u'IMAGES_WARNING_PNG', u'file': u'images/warning.png'}, {u'type': u'png', u'name': u'IMAGES_REFRESH_PNG', u'file': u'images/refresh.png'}, {u'type': u'png', u'name': u'IMAGES_CALENDAR_PNG', u'file': u'images/calendar.png'}, {u'type': u'png', u'name': u'IMAGES_ENVELOPE_PNG', u'file': u'images/envelope.png'}, {u'type': u'png', u'name': u'IMAGES_PUSHPIN_PNG', u'file': u'images/pushpin.png'}, {u'type': u'png', u'name': u'IMAGES_REMOVE_PNG', u'file': u'images/remove.png'}]
RPATH_ST = '-Wl,-rpath,%s'
SANDBOX = False
SDK_VERSION_MAJOR = 5
SDK_VERSION_MINOR = 86
SHLIB_MARKER = None
SIZE = 'arm-none-eabi-size'
SONAME_ST = '-Wl,-h,%s'
STLIBPATH_ST = '-L%s'
STLIB_MARKER = None
STLIB_ST = '-l%s'
SUPPORTED_PLATFORMS = ['chalk', 'basalt', 'aplite', 'diorite', 'emery']
TARGET_PLATFORMS = ['emery', 'diorite', 'chalk', 'basalt', 'aplite']
TIMESTAMP = 1570920206
USE_GROUPS = True
VERBOSE = 0
WEBPACK = '/home/gfunkmonk/.pebble-sdk/SDKs/current/node_modules/.bin/webpack'
cprogram_PATTERN = '%s'
cshlib_PATTERN = 'lib%s.so'
cstlib_PATTERN = 'lib%s.a'
macbundle_PATTERN = '%s.bundle'
